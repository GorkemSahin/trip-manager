import React from 'react'
import { ButtonWithIcon, IconButton, StyledText } from './styled'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import Loader from 'react-loader-spinner'

const Button = ({ text, icon, style, loading, disabled, ...rest }) => {
  const StyledButton = text ? ButtonWithIcon : IconButton
  return (
    <StyledButton disabled={disabled || loading} style={style} {...rest}>
      <StyledText {...rest}>{text}</StyledText>
      {loading ? (
        <Loader
          width={'1.3em'}
          height={'1.3em'}
          type="TailSpin"
          color="black"
        />
      ) : (
        icon
      )}
    </StyledButton>
  )
}

export default Button
