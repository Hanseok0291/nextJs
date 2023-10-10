import styled, { createGlobalStyle } from "styled-components";
import GlobalStyle from "../components/global";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Main from "../components/Main";

import React from "react";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Main />
      <Footer />
    </>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #bdc3c7;
`;

const Button = styled.button`
  border-radius: 50px;
  padding: 5px;
  min-width: 120px;
  color: white;
  font-weight: 600;
  -webkit-appearance: none;
  cursor: pointer;
  &:active,
  &:foucus {
    outline: none;
  }
`;

export default App;
