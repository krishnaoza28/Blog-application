import React from 'react'
import logo from '../assets/logo.png'

function Logo({width='20px'}) {
  return (
    <img src={logo} className='rounded-lg' alt="Logo" width={50} />
  )
}

export default Logo