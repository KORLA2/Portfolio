import React from 'react'

type  sizetype="sm"|"default"|"lg";
const Button = ({className="",size="default",children,onClick,...props}:{className:string,size:sizetype,children:React.ReactNode,onClick?:()=>void}) => {

const baseClass="overflow-hidden relative rounded-full font-medium transition bg-green-800 shadow-lg  hover:shadow-green-800 cursor-pointer"

const sizeclass={
    sm:"px-4 py-2 text-sm",
    default:"px-6 py-3 text-base",
    lg:"px-8 py-4 text-lg"
}

const classes=`${baseClass} ${sizeclass[size]} ${className}`
  return (
   <button onClick={onClick} className={classes} {...props}>
<span className='relative flex items-center justify-center'>{children}</span>
   </button>
  )
}

export default Button