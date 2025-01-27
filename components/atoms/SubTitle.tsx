import React from 'react'

const SubTitle = ({
    text,
    className
}:{
    text:string,
    className?:string
}) => {
  return (
    <p className={className}>{text}</p>
  )
}

export default SubTitle