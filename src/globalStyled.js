import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize}
  * {
    -webkit-appearance: none;
  }
  & input, button {
    height: 3em;
  }
  & input[type="radio"] {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    display: inline-block;
    width: 15px;
    height: 15px;
    padding: 2px;
    background-clip: content-box;
    border: 2px solid black;
    background-color: #e7e6e7;
    border-radius: 50%;
    outline: none;
    :checked {
      background-color: black;
    }
  }
  & span[type="submit"] {
    -webkit-appearance: none;
    -moz-appearance: none;
  }
`;

export default GlobalStyle;
