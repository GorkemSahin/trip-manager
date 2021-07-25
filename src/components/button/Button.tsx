import React, { ButtonHTMLAttributes, forwardRef, ReactElement } from 'react'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import Loader from 'react-loader-spinner'
import { SButton } from './Button.styled'
import { useLoadingCallback } from 'utils/hooks'

export const Button = forwardRef<
  HTMLButtonElement,
  ButtonHTMLAttributes<HTMLButtonElement> & {
    danger?: boolean
    disabled?: boolean
    onClick?: () => void
    icon?: ReactElement
    children?: string
    isLoading?: boolean
  }
>(({ children, onClick, disabled, icon, isLoading, ...props }, ref) => {
  const [handleClick, isRunning] = useLoadingCallback(
    async () => await onClick?.()
  )
  return (
    <SButton
      ref={ref}
      disabled={isLoading || isRunning || disabled}
      onClick={onClick ? handleClick : undefined}
      {...props}
    >
      {isLoading || isRunning ? (
        <Loader width={'1rem'} height={'1rem'} type="TailSpin" color="black" />
      ) : (
        <>
          {icon}
          {children && <label>{children}</label>}
        </>
      )}
    </SButton>
  )
})
