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
    & div[mode='container'] {
      display: flex;
      background-color: ${ theme.gray }
      border-radius: ${ theme.borderRadius }
      margin-top: ${ theme.small }
      padding: ${ theme.small }
    }
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
        background-color: ${ theme.black };
      }
    }
    & button[danger] {
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
  `}
`;

export default GlobalStyle;
