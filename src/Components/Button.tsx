import React from 'react'

type  sizetype="sm"|"default"|"lg";
const Button = ({className="",size="default",children}:{className:string,size:sizetype,children:string}) => {

const baseClass="overflow-hidden relative rounded-full font-medium transition bg-green-800 shadow-lg  hover:shadow-green-800 cursor-pointer"

const sizeclass={
    sm:"px-4 py-2 text-sm",
    default:"px-6 py-3 text-base",
    lg:"px-8 py-4 text-lg"
}

const classes=`${baseClass} ${sizeclass[size]} ${className}`
  return (
    <div className={classes}>{children}</div>
  )
}

export default Button