import React, { Component, Fragment } from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import Header from './Header';
import Meta from './Meta';

const theme = {
  blue: '#183283',
  lightBlue: '#92a6e2',
  red: '#FF0000',
  black: '#393939',
  grey: '#3A3A3A',
  lightgrey: '#E1E1E1',
  offWhite: '#EDEDED',
  maxWidth: '100vw',
  backgroundColor: '#dfe2ea',
  //  "#dfe2ea",
  // bs: "0 12px 24px 0 rgba(0, 0, 0, 0.09)",
};

const StyledPage = styled.div`
  color: ${(props) => props.theme.black};
`;

const Inner = styled.div`
  max-width: ${(props) => props.theme.maxWidth};
`;

const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
  box-sizing: border-box;
}
  html {
    box-sizing: border-box;
    font-size: 10px;
    font-family: 'Raleway', sans-serif;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    height: 100%;
    width: 100%;
    background:  ${(props) => props.theme.backgroundColor};

  }
  a {
    text-decoration: none;
    color: ${theme.black};
  }
  button {     
     font-family :  "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif";
     }
`;

class Page extends Component {
  render() {
    return (
      <Fragment>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <StyledPage>
            <Meta />
            <Header />
            <Inner>{this.props.children}</Inner>
          </StyledPage>
        </ThemeProvider>
      </Fragment>
    );
  }
}

export default Page;
