import Link from "next/link";
import NavToggle from "../NavToggle";
import Styled from "styled-components";
import { useContext } from "react";
import Store from "../../store/context";


const HeaderContainer = Styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
    padding:0 5vw;
    box-sizing:border-box;
    border-bottom:1px solid #ddd;
    width:100vw;
    color: #ddd;
`;

const Gnb = Styled.ul`
    //미디어쿼리 PC내용들
    display:flex;
    
    flex-direction:row;
    & > li {
      margin-left:20px;
    }
    //모바일
    @media only screen and (max-width:768px) {
        display:none;    
    }
`;

const Header = () => {
  const globalStore = useContext(Store);
  const { IsLogin } = globalStore.state;

  return (
    <HeaderContainer>
      {/* 로고와 메뉴 */}
      <h1>로고</h1>
      <Gnb>
        <li>
          <Link href="/">
            <a style={{color: '#ddd'}}>HOME</a>
          </Link>
        </li>
        <li>
          <Link href="/posts/post">
            <a style={{color: '#ddd'}}>글쓰기</a>
          </Link>
        </li>
        {IsLogin === false ? (
          <>
            <li>
              <Link href="/user/login">
                <a style={{color: '#ddd'}}>로그인</a>
              </Link>
            </li>
            <li>
              <Link href="/user/join">
                <a style={{color: '#ddd'}}>회원가입</a>
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link href="/user/login">
                <a>로그아웃</a>
              </Link>
            </li>
            <li>
              <Link href="/user/join">
                <a>회원정보</a>
              </Link>
            </li>
          </>
        )}
      </Gnb>
      <NavToggle />
    </HeaderContainer>
  );
};

export default Header;
