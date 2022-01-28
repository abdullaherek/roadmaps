import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
  body: "white",
  fontColor: "black"
};
export const darkTheme = {
  body: "#23272F",
  fontColor: "white"
};



export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color:${(props) => props.theme.body};
    color: ${(props) => props.theme.fontColor};
    font-family: Raleway;
  }
`;
 
