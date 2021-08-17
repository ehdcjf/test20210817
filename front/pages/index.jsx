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
              }}>{text.value}
              </p>
           
              </div>
         

       
        <div>
          가로 <input type="number" {...width} />
        </div>
        <div>
        세로 <input type="number" {...height} />
        </div>
        <ChromePicker 
          color={background}
          onChangeComplete={handleChangeBackground} />
       
        
       

        <div>
          내용 <input type="text" {...text} />
        </div>

        <div>
        글자크기 <input type="number" {...fontSize} />
        </div>
        
        
        <ChromePicker 
          color={fontColor}
          onChangeComplete={handleChangeColor}
        />
   

          <button onClick={onButtonClick}>Click me</button>
        </StyledContainer>
      </BlogLayout>
    </>
  );
};
export default Index;
