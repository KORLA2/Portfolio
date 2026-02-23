import { useState } from "react"
import Button from "../Components/Button"
import { Menu, XIcon } from "lucide-react";

const links=[
    {
        href:"#about",
        name:"About"
    }, {
        href:"#projects",
        name:"Projects"
    }, {
        href:"#expereince",
        name:"Expereince"
    }, {
        href:"#testimonials",
        name:"Testimonials"
    }
]

const Navbar = () => {
  const [open,setisOpen]=useState(true);
  return (
    <header className="fixed top-0 py-5 animate-fade left-0 right-0 ">

<nav className=" flex px-8 md:px-15 justify-between items-center">

<a  className="text-xl font-bold hover:text-green-700 cursor-pointer transition">
Goutham
</a>

    <div className={`
        max-md:font-medium max-md:text-lg flex flex-col items-center  md:flex-row
max-md:justify-center  px-8 py-2 max-md:h-screen  md:rounded-full backdrop-blur bg-black/60
md:bg-white/10 md:border  md:border-gray-300/20 overflow-hidden transition-[translate] duration-300
max-md:absolute max-md:top-0 max-md:left-0 z-5  ${open ? "max-md:translate-x-0 max-md:w-full" : "max-md:-translate-x-full"}

       `}>
    <XIcon onClick={()=>setisOpen((prev)=>!prev)} className='animate-fade md:hidden absolute right-6 top-6 w-6 h-6 cursor-pointer'/>
    
    {
    links.map((link,index)=><a 
    key ={index}
    href={link.href}
    className="px-4 py-2 text-sm rounded-full text-gray-300 transition  hover:text-white"
    >{link.name}</a>)
  }
  <Button className=" md:hidden mt-2" size="sm" >Contact Me</Button>

    </div>

<Button className="max-md:hidden " size="sm" >Contact Me</Button>
<Menu  onClick={()=>setisOpen(prev=>!prev)} className="  md:hidden"/>
</nav>
    </header>
  )
}

export default Navbar