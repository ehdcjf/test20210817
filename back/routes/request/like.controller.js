const pool = require('../../config/dbconnection');
const jwtId = require('../../jwtId')


const LikeAction = async (req, res) => {
  const { isLike, board_id, type, action } = req.body;
  console.log(req.body)
  const AccessToken = req.cookies.AccessToken;
  let user;
  if (AccessToken != undefined) {
    user = jwtId(AccessToken);
  }


  let connection;
  try {
    connection = await pool.getConnection(async conn => conn);
    try {
      let [result] = [];
      switch (action) {
        case 'INSERT':
          const insertSql = `INSERT INTO ${type} (board_id,user_idx,islike) values(?,?,?)`
          const insertParams = [board_id, user, isLike];
          [result] = await connection.execute(insertSql, insertParams)
          break;
        case 'DELETE':
          const deleteSql = `DELETE FROM ${type} WHERE board_id=? AND user_idx=?`
          const deleteParams = [board_id, user,];
          [result] = await connection.execute(deleteSql, deleteParams)
          break;
        case 'UPDATE':
          const updateSql = `UPDATE ${type} SET islike=? WHERE board_id=? AND user_idx=?`
          const updateParams = [isLike, board_id, user];
          [result] = await connection.execute(updateSql, updateParams)
          break;
        default:
          break;
      }
      const data = {
        success: true,
        isLike: isLike
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


module.exports = { LikeAction }