import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize}
  * {
    -webkit-appearance: none;
    outline: none;
  }
  & span[type="submit"] {
    -webkit-appearance: none;
    -moz-appearance: none;
  }
  ${({ theme }) => `
    & label {
      font-weight: ${ theme.labelWeight };
      size: ${ theme.medium };
    }
    & input, button {
      height: ${ theme.medium };
    }
    & button {
      display: flex;
      height: ${ theme.buttonHeight };
      align-items: center;
      border: none;
      background-color: ${ theme.darkGray };
      border-radius: ${ theme.borderRadius };
      padding: ${ theme.small };
      > * {
        opacity: 60%;
      }
      :hover {
        > * {
          opacity: 100%;
        }
      }
      :focus {
        outline: none;
        > * {
          opacity: 100%;
        }
      }
      :disabled {
        background-color: ${ theme.lightGray };
      }
    }
    & button[mode="primary"] {
      background-color: ${ theme.orange };
      > * {
        opacity: 100%;
      }
      > span {
        color: ${ theme.black };
      }
      :hover {
        background-color: ${ theme.darkOrange };
      }
      :disabled {
        background-color: ${ theme.lightOrange };
      }
    }
    & button [loading=*] {
      background-color: ${ theme.lightOrange };
    }
    & button[mode="danger"] {
      background-color: ${ theme.lightRed };
      :hover {
        background-color: ${ theme.lightRed };
      }
    }
    & input {
      border: 1px solid ${ theme.darkGray };
      background-color: ${ theme.white };
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
      border: 2px solid ${ theme.black };
      background-color: ${ theme.white };
      border-radius: 50%;
      outline: none;
      :checked {
        background-color: ${ theme.black };;
      }
    }
    & span, strong {
      margin-bottom: 0.25em;
    }
    & span[mode='light'] {
      color: ${ theme.veryDarkGray }
    }
    & strong {
      font-weight: 900;
      font-size: 1.1em;
    }
    ::placeholder {
      color: ${ theme.lightText };
      opacity: 50%;
    }
  `}
`;

export default GlobalStyle;
