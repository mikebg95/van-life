import React from 'react'

const VanTypeButton = ({ type }) => {
  return (
    <button className={`van-type ${type}`}>
        {type.charAt(0).toUpperCase() + type.slice(1)}
    </button>
  )
}

export default VanTypeButton
