// import Link from "next/link";
// import NavToggle from "./NavToggle";
import Header from "./layout/Header";
import styled from "styled-components";

const StyledWrap = styled.div`
  width: 100%;
  height: auto;
  overflow: hidden;
`;

const BlogLayout = ({ children }) => {
  return (
    <>
      <StyledWrap>
        <Header />
        <div className="container">{children}</div>
        <div className="footer" style={{color: '#999'}}>copyright &copy; all reserved</div>
      </StyledWrap>
    </>
  );
};

export default BlogLayout;
