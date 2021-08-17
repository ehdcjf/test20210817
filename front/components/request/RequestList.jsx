import RequestItem from "./RequestItem";
import styled from "styled-components";

const StyledList = styled.div`
    width: 70vw;
    height: auto;
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 0 auto;
    transform-origin: ${(props) => (props.rotate ==='true' ? "50vw 50vh;" : "70vw ")};
    transform:${(props) => (props.rotate==='true' ? "perspective(1000px) translate3d(0,0,0) rotate3d(1,0,0,30deg);" : "none")};
     

`


const RequestList = (props) => {
    const list = props.list;
//   const handleDelete = props.handleDelete;
//   const handleModify = props.handleModify;
  
const Item = list.map((v, i) => {
    return (
      <RequestItem
        key={v.id}
        id={v.id}    
        name={v.name}
        content={v.content}
        date = {v.date}
      />
    );
  });

  // if (loadding) return <li>로딩중입니다^^</li>;
  // if (error) return <li>에러!!</li>;
  return <StyledList rotate={props.rotate.toString()}>{Item}</StyledList>;
};


export default RequestList;