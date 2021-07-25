import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

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
  input[type=number]::-webkit-inner-spin-button, 
  input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-datetime-edit-year-field:not([aria-valuenow]),
  ::-webkit-datetime-edit-month-field:not([aria-valuenow]),
  ::-webkit-datetime-edit-day-field:not([aria-valuenow]) {
      color: transparent;
  }
  fieldset {
    border: none;
  }
  ${({ theme }) => `
    & label {
      font-weight: ${theme.labelWeight};
      size: ${theme.medium};
    }
    & input {
      height: ${theme.medium};
    }
    & button {
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      background-color: ${theme.darkGray};
      border-radius: ${theme.borderRadius};
      padding: ${theme.small};
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
        background-color: ${theme.lightGray};
      }
    }
    & button[mode="primary"] {
      background-color: ${theme.primary};
      > * {
        opacity: 100%;
      }
      > span {
        color: ${theme.black};
      }
      :hover {
        background-color: ${theme.darkPrimary};
      }
      :disabled {
        background-color: ${theme.lightPrimary};
      }
    }
    & button [loading=*] {
      background-color: ${theme.lightPrimary};
    }
    & button[mode="danger"] {
      background-color: ${theme.lightRed};
      :hover {
        background-color: ${theme.lightRed};
      }
      > * {
        color: ${theme.red};
      }
    }
    & input {
      border: 1px solid ${theme.darkGray};
      background-color: ${theme.white};
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
      border: 2px solid ${theme.black};
      background-color: ${theme.white};
      border-radius: 50%;
      outline: none;
      :checked {
        background-color: ${theme.black};;
      }
    }
    & span[mode='light'] {
      color: ${theme.veryDarkGray}
    }
    & strong {
      font-weight: 900;
      font-size: 1.1em;
    }
    ::placeholder {
      color: ${theme.lightText};
      opacity: 50%;
    }
    p {
      color: #63666A;
      font-weight: 400;
      font-size: 0.8em;
    }
    h2 {
      margin: 0px;
      margin-bottom: ${theme.small};
      font-weight: 400;
      font-size: 1.5em;
    }
  `}
`

export default GlobalStyle
