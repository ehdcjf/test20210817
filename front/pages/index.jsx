import BlogLayout from "../components/BlogLayout";
import Head from "next/head";
import Link from "next/link";
import { toPng } from "html-to-image";
import { useRef, useCallback,useState } from "react";
import styled from "styled-components";
import useInput from "../hooks/useInput";
import { ChromePicker } from 'react-color'

const StyledContainer = styled.div`
  width: 80vw;
  height: auto;
  overflow: hidden;
  margin: 0 auto;
`;

const Index = () => {
  const ref = useRef(null);

  const text = useInput("HELLO WORLD");
  const width = useInput(700);
  const height = useInput(350);  
  const fontSize = useInput(72);
  const [background,setBackground] = useState('#ffffff')
  const [fontColor,setFontColor] = useState('#000000')

  const handleChangeColor = (color)=>{
    setFontColor(color.hex)

  }

  const handleChangeBackground = (color)=>{
    setBackground(color.hex)

  }

  const onButtonClick = useCallback(() => {
    if (ref.current === null) {
      return;
    }

    toPng(ref.current, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "my-image-name.png";
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  }, [ref]);

 


  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <BlogLayout>
        <Link href="/request">
          <a>해줘</a>
        </Link>

        <StyledContainer>
          <ContentContainer>
          <div ref={ref}
           style={{
            margin: '0 auto',
            display: 'flex',
            minHeight:'100px',
            minWidth:'100px',
            justifyContent:'center',
            alignItems:'center',
            width: `${width.value}px`,
            height: `${height.value}px`,
            background: background,
        
          }}>
           

              <p style={{
                margin: 'auto auto',
                fontSize:`${fontSize.value}px`,
                color: `${fontColor}`,
              }}>{text.value}
              </p>
           
          </div>
          </ContentContainer>
         

       
        <Container>
        <JustDiv>
          <Title>배경 설정</Title>
          <InputContainer>
          <JustSpan>
            가로 <Input type="number" {...width} />
          </JustSpan>
          </InputContainer>
          <JustSpan>
          세로 <Input type="number" {...height} />
          </JustSpan>
          <ChromePic 
            color={background}
            onChangeComplete={handleChangeBackground}
            />

        </JustDiv>
        
       
        
        
        <JustDiv>
        <InputContainer>
          <Title>글자 설정</Title>
          <JustSpan>
            내용 <Input type="text" {...text} />
          </JustSpan>
          </InputContainer>
          
          <JustSpan>
          글자크기 <Input type="number" {...fontSize} />
          </JustSpan>
          
          <ChromePic 
          color={fontColor}
          onChangeComplete={handleChangeColor}
        />
   

          <button onClick={onButtonClick}>Download</button>
        </JustDiv>
        </Container>
        
        </StyledContainer>
      </BlogLayout>
    </>
  );
};


const JustDiv = styled.div`
  width: 225px;
  margin: 0 auto;
`;

const Title = styled(JustDiv)`
  text-align: center;
`;

const ContentContainer = styled.div`
  background: #ececec;
  padding: 25px 0;
  width: 60%;
  margin: 0 auto;
`;

const InputContainer = styled.div``;

const JustSpan = styled.span`
  position: relative;
  padding: 0 11px;
  color: rgba(0,0,0,.65);
  font-weight: 400;
  font-size: 14px;
  text-align: center;
  background-color: #fafafa;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  transition: all .3s;
`;

const ChromePic = styled(ChromePicker)``;

const Container = styled.div`
  width: 500px;
  margin: 0 auto;
  display: flex;
`;


const Input = styled.input`
float: left;
width: 100%;
margin-bottom: 0;
text-align: inherit;

`;

export default Index;
