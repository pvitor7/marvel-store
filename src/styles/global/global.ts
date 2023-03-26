import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Source Sans Pro', sans-serif;
    ::-webkit-scrollbar {
  display: none;
}
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