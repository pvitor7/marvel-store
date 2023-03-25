import { createGlobalStyle } from 'styled-components';
import 'typeface-open-sans';



const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: "Open-Sans", sans-serif;
  }

  :root{
    --color-white-fixed: #FFFFFF;
    --color-black-fixed: #000000;
    --color-gray-1: #dddddd;
    --color-gray-2: 	#808080;
    --color-green1: #5cb850;
    }
`
export default GlobalStyle