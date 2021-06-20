import React from 'react'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import Loader from 'react-loader-spinner'

const Loading = ({ text, ...rest }) => {
  return (
    <Loader
      style={{ position: 'fixed', top: '33%', alignSelf: 'center' }}
      height={50}
      type="TailSpin"
      color="gray"
      {...rest}
    />
  )
}

export default Loading
