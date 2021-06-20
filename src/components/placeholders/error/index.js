import React from 'react'
import { Sad } from '../../../assets/icons'

const Error = ({ text, ...rest }) => {
  return (
    <div
      style={{
        display: 'flex',
        position: 'sticky',
        top: '33%',
        flexDirection: 'column',
        alignSelf: 'center',
        justifyContent: 'center',
      }}
    >
      <Sad
        style={{ alignSelf: 'center', marginBottom: '1em' }}
        color="gray"
        {...rest}
      />
      <span>{text || 'Something went wrong.'}</span>
    </div>
  )
}

export default Error
