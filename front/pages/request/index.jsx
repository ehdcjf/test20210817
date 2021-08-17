// import { RequestForm, RequestList } from '../../components/request'
import {BsPencilSquare} from 'react-icons/bs'
import RequestForm from '../../components/request/RequestForm'
import RequestList from '../../components/request/RequestList'
import { createRequest, showRequest } from '../../components/request/api';
import styled from 'styled-components';
import { useState, useEffect } from 'react'


const StyledWrap = styled.div`
    width: 100%;
    height: auto;
    overflow: hidden;
`

const StyledContainer = styled.div`
    width: 80vw;
    height: auto;
    overflow: hidden;
    margin: 0 auto;

    &>h2{
        width: 70vw;
        text-align: center;
        margin:0 auto;
        font-size: 4.5rem;
    }

    & > .writeBtn {
        width: 70vw;
        height: 50px;
        margin: 0 auto;
        text-align: right;
    }


`

const dateFormat = () => {
    const now = new Date();
    const y = now.getFullYear()
    const m = now.getMonth() + 1 > 0 ? now.getMonth() + 1 : '0' + String(now.getMonth() + 1)
    const d = now.getDate() + 1 > 0 ? now.getDate() + 1 : '0' + String(now.getDate() + 1)

    return `${y}-${m}-${d}`
}


const index = () => {
    const [list, setList] = useState([]);
    const [skip, setSkip] = useState(0);
    const [rotate, setRotate] = useState(false);
    const [fetching, setFetching] = useState(false);


    const handleRotate = (value) => {
        setRotate(value)
    }

    //===== init

    ///=====CREATE
    const handleCreate = async (data) => {
        let card = { ...data }
        const result = await createRequest(card);
        console.log(result);
        if (result.success) {
            card.date = dateFormat();
            card.liked = 0;

            const newList = [card, ...list];
            setList(newList);
            setRotate(false)
        }
        else {
            alert(result.error)
        }


        //
    };

    //======READ

    useEffect(async () => {
        const data = {
            skip: skip
        }
        const result = await showRequest(data);
        console.log(result);
        if (result.success) {

            const newList = [...list, ...result.list];
            setList(newList);
            setSkip(skip + 16);
        } else {
            alert(result.error)
        }
    }, []);

    //////==== infinity
    const fetchMoreRequest = async () => {
        setFetching(true);
        const data = {
            skip: skip
        }
        const result = await showRequest(data);

        if (result.success) {

            const newList = [...list, ...result.list];
            setList(newList);
            setSkip(skip + 16);
            setFetching(false);
        } else {
            alert(result.error)
        }
    };

    // const { loadding, RequestItem, error } = state;

    const handleScroll = () => {
        const scrollHeight = document.documentElement.scrollHeight;
        const scrollTop = document.documentElement.scrollTop;
        const clientHeight = document.documentElement.clientHeight;

        if (scrollTop + clientHeight >= scrollHeight && fetching === false &rotate===false) {
            fetchMoreRequest();
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    });

    /*

    //=====UPDATE
    const handleModify = async (data) => {
        const result = await updateRequest(data);
        if (result.success) {
            const newList = [...list];
            newList.forEach((v) => {
                if (v.id == data.id) {
                    v.content = data.content;
                    v.isUpdate = true;
                }
            });
            setList(newList);
            alert("수정되었습니다.");
        } else {
            alert(result.error);
        }
    };

    //====DELETE
    const handleDelete = async (data) => {
        const result = await destroyRequest(data);
        console.log(result); 
        if (result.success) {
            const newList = [...list];
            newList.forEach((v) => {
                if (v.id == data.id) {
                    v.content = "삭제된 댓글입니다.";
                    v.isWriter = false;
                    v.type = null;
                }
            });
            setList(newList);
            alert("삭제되었습니다.");
        } else {
            alert(result.error);
        }
    };
    */

    return (
        <StyledWrap>
            <StyledContainer>
                <h2>개발자에게 '요구'하세요</h2>
                {rotate && <RequestForm rotate={rotate} handleRotate={handleRotate} handleCreate={handleCreate} />}

                {!rotate && <div className='writeBtn' onClick={()=>{handleRotate(true)}}>
                    <BsPencilSquare size={48} />
                </div>}
            
                <RequestList
                    list={list}
                    rotate={rotate}
                />
            </StyledContainer>
        </StyledWrap>
    );




}

export default index;