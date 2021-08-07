import React from 'react'
import './Input.css'

function Input(props) {
  const { size, placeholder } = props
  return (
    <div>
      <input className={size} type="text" placeholder={placeholder} />
    </div>
  )
}

export default Input