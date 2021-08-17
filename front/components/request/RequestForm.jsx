import useInput from '../../hooks/useInput'


import styled from 'styled-components'

const StyledForm = styled.div`
  width: 70vw;
  height: 50vh;
  margin: 0 auto;
`


const RequestForm = (props) => {

    const name = useInput('')
    const pw = useInput('')
    const content = useInput(''); 
    const handleCreate=props.handleCreate; 
    const handleRotate=props.handleRotate; 

    const handleSubmit = async (e) => {
      e.preventDefault();
      if(name.value===""){
        return alert("닉네임을 입력해주세요")
      }
      if(pw.value===""){
        return alert("비밀번호를 입력해주세요")
      }
      if(content.value===""){
        return alert("요구사항을 입력해주세요")
      }
  
      const data = {
        name:name.value,
        content: content.value,
        pw:pw.value
        
      };
      handleCreate(data);
    };
    
    
    return (
        <StyledForm>
        <form onSubmit={handleSubmit}>
          아아디: <input type="text" {...name} placeholder="닉네임 입력해주세요" /><br/>
          비밀번호: <input type="password" {...pw} placeholder="비밀번호를 입력해주세요" /><br/>
          요구사항: <input type="text" {...content} placeholder="요구사항을 입력해주세요" /><br/>
          <button type="submit">해줘</button>
          <button onClick={()=>{handleRotate(false)}}>취소</button>
        </form>
            
        </StyledForm>
    );
}

export default RequestForm;