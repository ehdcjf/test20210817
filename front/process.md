# front 폴더 생성 > cd front

# NEXT

1. npm init
2. npm install next react react-dom
3. npm install -g npm (next 설치 안되면;)
4. pakage.json 수정

   "scripts": {
   "dev": "next dev -p 3001 -H 0.0.0.0",
   "build": "next build",
   "start": "next start",
   "lint": "next lint"
   }

5. pages 폴더 생성
6. pages> index.jsx 생성
7. 컴포넌트 만들어주기.
8. npm run dev <- 실행

# pages 폴더

-> index.jsx
-> user폴더 -> join.jsx
-> user폴더 -> login.jsx
-> post.jsx

# 다이나믹 라우팅

1. 파일명을 배열 형식으로 만든다. [join].jsx [post].jsx
2. 게시글 번호에 따라.

# 레이아웃 구성하기

1. front > components 폴더 생성
2. component 생성
3. 컴포넌트 연결

# 링크

import Link from 'next/link'
<Link to='/'>home</Link>
<Link href='/user/join'><a>Join</a></Link>

# 모든 컴포넌트에 공통적인 것을 넣을 때.

1. \_app.jsx 파일
2. Component 설정

# Font

        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
        crossorigin o를 대문자로  o -> O
        하고 true 값

# css

    공용css는
    FormLayout.module.css 만들고
    styled로 import 해주고

    나머지는 스타일드 컴포넌트로 만들자^^

# styled-component 환경설정

pages > \_document.jsx

# babelrc





# npm install next-redux-wrapper 
# npm install redux
# npm install react-redux
# npm install redux-devtools-extension

1.store > configureStore.js