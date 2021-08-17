const pool = require('../../config/dbconnection');
const { yymmdd, clearDateOnly } = require('../util')



const createArticle = async (req, res) => {
    const { name, pw, content } = req.body;
    let connection;
    try {
        connection = await pool.getConnection(async conn => conn);
        try {
            const sql = `INSERT INTO request (name, pw, content) values(?,?,?)`
            const params = [name, pw, content];
            const [row] = await connection.execute(sql, params)
            const data = {
                success: true,
                data: row.insertId,
            }
            res.json(data)
        } catch (error) {
            console.log('Query Error');
            const data = {
                success: false,
                error: error,
            }
            console.log(error)
            res.json(data)
        }
    } catch (error) {
        console.log('DB Error')
        const data = {
            success: false,
            error: error,
        }
        console.log(error)
        res.json(data)
    } finally {
        connection.release();
    }
}



const showList = async (req, res) => {
    const { skip } = req.params;
    let connection;
    try {
        connection = await pool.getConnection(async conn => conn);
        try {

            const sql = `SELECT * FROM request ORDER BY id DESC LIMIT ?,16;`
            const params = [skip]
            const [results] = await connection.execute(sql, params)
            results.forEach(ele => {
                ele.date = clearDateOnly(ele.date)
            });
            const data = {
                success: true,
                list: results,
            }
            res.json(data);
        } catch (error) {
            console.log('Query Error');
            const data = {
                success: false,
                error: error,
            }
            console.log(error)
            res.json(data)
        }
    } catch (error) {
        console.log('DB Error')
        const data = {
            success: false,
            error: error,
        }
        console.log(error)
        res.json(data)
    } finally {
        connection.release();
    }
}








const showArticle = async (req, res) => {
    const { id } = req.params;
    const AccessToken = req.cookies.AccessToken;
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const now = yymmdd(new Date());

    let writer;
    if (AccessToken !== undefined)
        writer = jwtId(AccessToken);
    let connection;
    try {
        connection = await pool.getConnection(async conn => conn);
        try {

            //////=============================== hit update sql =====================================================///
            // 조회수를 ip말고 쿠키로 처리하는 방법도 생각하기
            // 접근했던 게시글에 대한 정보를 쿠키에 담고 있으면? ==> 내가 누른 게시글 색깔 변하게 해주는 것도 쉽게 구현할 수 있을 듯
            // 쿠키에 있으면 보라색. 아니면 검은색 이런식으로.
            // 생각해보니 쿠키에 안 담고 그냥 상태로 담아도 상관 없음..
            const hitSearchSql = `SELECT  id,date from hit where board_id=? AND ip=?`
            const hitParams = [id, ip];
            const [hitInfo] = await connection.execute(hitSearchSql, hitParams)
            let updatedAt;
            let hitID;
            if (hitInfo.length !== 0) {
                updatedAt = yymmdd(hitInfo[0].date);
                hitID = hitInfo[0].id;
            }
            if (hitInfo.length === 0 || updatedAt !== now) {//upsert 구문 쓰는 법 알아볼것( primary key 가 하나여야한다는데??)
                if (hitInfo.length === 0) {
                    const hitInsertSql = `INSERT INTO hit (board_id,ip,date) values(?,?,?);`
                    const hitInsertParams = [id, ip, now];
                    const [result] = await connection.execute(hitInsertSql, hitInsertParams)
                } else {
                    const hitUpdateSql = `UPDATE hit SET date=? WHERE id=?;`
                    const hitUpdateParams = [now, hitID];
                    const [result] = await connection.execute(hitUpdateSql, hitUpdateParams)
                }
                const boardHitUpdateSql = `UPDATE board SET hit=hit+1 WHERE id=?;` //// 이부분 트리거로 빼기.
                const boardHitParams = [id];
                const [hit] = await connection.execute(boardHitUpdateSql, boardHitParams)
            }
            //////=============================== hit update sql =====================================================///

            /////================================ like sql  start =======================================================///
            //join 해서 가져오고 싶은데 비회원일경우에 조회하는 게 힘들 것 같음... 
            let isLike = null;
            if (writer !== undefined) {//회원일 경우 좋아요 눌렀는 지 확인해야함.
                const likeSql = `SELECT islike FROM blike WHERE board_id=? AND user_idx=?`
                const likeParams = [id, writer]
                const [result] = await connection.execute(likeSql, likeParams)
                if (result.length !== 0) {
                    isLike = result.islike;
                }
            }

            /////================================ like sql end=======================================================///

            /////=================================article sql start======================================///
            const sql = `SELECT user.idx AS useridx, user.nickname,board.id,board.subject,board.content,board.createdAt,board.updatedAt,board.hit,board.liked,board.disliked,board.del AS del
            FROM (SELECT idx, nickname FROM user) AS user 
            INNER JOIN board AS board
            ON board.writer = user.idx 
            WHERE id=?`

            const params = [id];
            const [result] = await connection.execute(sql, params)

            /////=================================article sql end======================================///

            ///===============================

            result[0].createdAt = clearDate(result[0].createdAt)

            let data = { ...result[0], isLike }

            //삭제된 게시글은 제목과 내용을 가려줌.
            if (data.del === 1) {
                data.subject = '삭제된 게시글입니다.'
                data.content = '삭제된 게시글입니다.'
            }

            //해당 글의 작성자면  isWriter 를 true 값을 부여하여 프론트에서 수정 삭제 버튼을 보여줄지 말지 정함.
            if (data.useridx == writer) {
                data.isWriter = true;
            } else {
                data.isWriter = false;
            }
            console.log(data);
            data.success = true;
            res.json(data);
        } catch (error) {
            console.log('Query Error');
            console.log(error)
            res.json(error)
        }
    } catch (error) {
        console.log('DB Error')
        console.log(error)
        res.json(error)
    } finally {
        connection.release();
    }
};


//트리거로 updatedAt 바꿔주기.
const updateArticle = async (req, res) => {
    const { subject, content } = req.body;
    const { id } = req.params;
    const update = new Date();

    let connection;
    try {
        connection = await pool.getConnection(async conn => conn);
        try {
            const sql = `UPDATE board SET subject=?,content=?,updatedAt=? WHERE id=?`
            const params = [subject, content, update, id];
            const [rows] = await connection.execute(sql, params)
            res.json(rows);
        } catch (error) {
            console.log('Query Error');
            console.log(error)
            res.json(error)
        }
    } catch (error) {
        console.log('DB Error')
        console.log(error)
        res.json(error)
    } finally {
        connection.release();
    }
}


const deleteArticle = async (req, res) => {
    const { id, useridx } = req.params;
    const AccessToken = req.cookies.AccessToken;
    const writer = jwtId(AccessToken);

    if (useridx != writer) {//사용자 측에서 억지로 delete요청을 보냈을 때,
        const data = {
            success: false,
        }
        res.json(data)
    } else {
        let connection;
        try {
            connection = await pool.getConnection(async conn => conn);
            try {
                const sql = `UPDATE board SET del=1 WHERE id=?`
                const params = [id];
                const [rows] = await connection.execute(sql, params)
                //이부분 점검이 필요. 쿼리가 잘 실행 된건지 아닌지.
                // if(rows.affectedRows===1)
                const data = {
                    success: true,
                    id: id,
                }
                res.json(data);
            } catch (error) {
                console.log('Query Error');
                console.log(error)
                res.json(error)
            }
        } catch (error) {
            console.log('DB Error')
            console.log(error)
            res.json(error)
        } finally {
            connection.release();
        }

    }
}








module.exports = {
    showList,
    showArticle,
    createArticle,
    updateArticle,
    deleteArticle,
}









const searchVerse = (sql, obj) => {
    const { type, search, keyword } = obj;

    let whereVerse = '';

    switch (search) {
        case 'subject':
            whereVerse = ` WHERE subject LIKE '%${keyword}%'`
            break;
        case 'content':
            whereVerse += ` WHERE content LIKE '%${keyword}%'`
            break;
        case 'subject_content':
            whereVerse += ` WHERE (content LIKE '%${keyword}%' or subject LIKE '%${keyword}%')`
            break;
        case 'writer':
            whereVerse += ` WHERE (user.nickname LIKE '%${keyword}%')`
            break;
        default:
            break;
    }
    if (type !== "all") {
        whereVerse += `and like>24`
    }
    //searchSql: searchHead + whereVerse + ,
    return sql + whereVerse;
}

const makePageBlock = (cnt, obj) => {
    const { rows } = obj;
    let { page } = obj;
    const totalPage = Math.ceil(cnt / rows);
    if (page > totalPage) page = totalPage;
    let block = 10;
    while (page > block) {
        block += 10;
    }
    const pageblock = [];
    for (let i = block - 9; i <= block; i++) {
        pageblock.push(i);
        if (i === totalPage) break;
    }
    return { page: page, rows: rows, pageblock: pageblock, totalPage: totalPage, }
}





const updateHit = () => {

}