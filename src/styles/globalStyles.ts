import { createGlobalStyle } from 'styled-components';
import { PoppinsFont } from './fonts/fonts'

const GlobalStyle = createGlobalStyle`
  ${PoppinsFont}

  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }
  body {
    font-family:'Poppin', sans-serif;
  }
`;

export default GlobalStyle;