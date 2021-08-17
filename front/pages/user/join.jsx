import FormLayout from "../../components/FormLayout";
import Head from "next/head";
import useInput from "../../hooks/useInput";
import {useState} from 'react'

const Join = () => {
  const userid = useInput('')
  const username = useInput('')
  const userpw = useInput(''); 

  const [passwordCheck,setPasswordCheck] = useState(''); 
  const [passwordError,setPasswordError] = useState(false); 

  const handlePasswordCheck = e  => { 
    const {value} = {...e.target};
    setPasswordError(userpw.value !== value)
    setPasswordCheck(value); 
  }

  const [term,setTerm] = useState(false);
  const [termError,setTermError] = useState(false); 
  
  const handleTerm = () => { 
    setTermError(term === true )
    setTerm(!term)
  }

  const handleSubmit = e => { 
    e.preventDefault();

    if(userpw.value!==passwordCheck){ 
      setPasswordError(true)
      return 
    }else{
      setPasswordError(false); 
    }
    if(!term){ 
      setTermError(true)
      return; 
    }
    console.log(userid.value)
    console.log(username.value)
  }


  return (
    <>
      <Head>
        <title>Join</title>
      </Head>
      <FormLayout>
        <h2>회원가입</h2>
        <form onSubmit={handleSubmit}>
          아아디: <input type="text" {...userid} placeholder="아이디를 입력해주세요" /><br/>
          이름: <input type="text" {...username} placeholder="이름을 입력해주세요" /><br/>
          비밀번호: <input type="password" {...userpw} placeholder="비밀번호를 입력해주세요" /><br/>
          비밀번호 확인: <input type="password" value={passwordCheck} onChange={handlePasswordCheck} placeholder="비밀번호를 다시 입력해주세요" /><br/>
          {passwordError && <div style={{color:'red'}}>비밀번호가 일치하지 않습니다.</div>}
          <input type="checkbox" checked={term} onChange={handleTerm} id="term"/> 
          <label htmlFor="term">약관에 동의해주세요.</label><br/>
          {termError && <div style={{color:'red'}}>약관에 동의해주세요.</div>}
          <button type="submit">회원가입</button>
        </form>
      </FormLayout>
    </>
  );
};

export default Join;
