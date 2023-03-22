import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: inherit, sans-serif;
  }

  :root{
    --color-white-fixed: #FFFFFF;
    --color-back-fixed: #000000;
    --color-gray-1: #dddddd;
    --color-green1: #5cb85c;
    }
`
export default GlobalStyle