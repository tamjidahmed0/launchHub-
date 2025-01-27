import React from 'react'

const Button = ({
    className,
    btnText,
  
}:{
    className?: string,
    btnText: string
}) => {
  return (
    <button className={className}>
      {btnText}
    </button>
  )
}

export default Button