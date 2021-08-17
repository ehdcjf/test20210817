import "../index.css";
import Head from "next/head";
import Store, { initialState } from "../store/context";
import { useContext, useReducer } from "react";
import { reducer } from "../store/reducer";

const App = ({ Component }) => {
  const globalContext = useContext(Store);
  const [state, dispatch] = useReducer(reducer, globalContext);
  //globalContext 값이 state에 들어있고 dispatch가 reducer를 통해 state를 관리한다.
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Store.Provider value={{ state, dispatch }}>
        <Component />
      </Store.Provider>
    </>
  );
};

export default App;
