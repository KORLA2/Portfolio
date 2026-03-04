import { Github, Linkedin, Twitter, Youtube } from 'lucide-react'
import React from 'react'

const socials=[
  {name:Github,href:"https://github.com/KORLA2"},
  {name:Linkedin,href:"https://github.com/KORLA2"},
  {name:Youtube,href:"https://github.com/KORLA2"},
  {name:Twitter,href:"https://github.com/KORLA2"},


]

const footerLinks=[
    {href:"#about",label:"About"},
    {href:"#projects",label:"Projects"},
    {href:"#experience",label:"Experience"},
    {href:"#contact",label:"Contact"},

]

const Footer = () => {
const currYear=new Date().getFullYear();

  return (
   <footer className="py-12 ring-2 ring-green-900/90 border-t border-green-900 ">
<div className='mx-auto px-6 container'>
<div className='flex flex-col md:flex-row items-center justify-between gap-8'>
<div className='text-center md:text-left'>
 <a href="#" className='text-xl font-bold tracking-tight'>
    Goutham
 </a>
 <p className='text-sm text-gray-400'>
@{currYear} Goutham All Rights Reserved
 </p>
</div>

<div className='flex-col md:flex-row flex'> 
     {
    footerLinks.map((link,index)=><a 
    key ={index}
    href={link.href}
   
    className="px-4 py-2 text-sm rounded-full  text-gray-300 transition  hover:text-white"
    >{link.label}</a>)
  }
</div>

<div className='flex items-center gap-2   '>
    {
    
        socials.map((social,idx)=>(
            <a target="blank" style={{animationDelay:`${(idx+1)*100}ms`}} 
            className= {` p-2 transition-all px-4 py-2  rounded-full hover:bg-green-700/60`}
            key={idx} href={social.href}>{<social.name className="h-5 w-5"/>}</a>))
            
        }
</div>

</div>
</div>


</footer>
  )
}

export default Footer