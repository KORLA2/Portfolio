import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { useEffect, useState } from "react"

const testimonials=[
{

   quote:"Goutham is one of the talented engineers I've worked with . His attention to detail making complex things easier is remarkbale ",
    author:"Sarah Chen",
    role:"CTO, Tech Innovators",
    avatar:"/user.jpg" 
  },{
   quote:"rkbale ",
    author:"Sarah Chen",
    role:"CTO, Tech Innovators",
    avatar:"/user.jpg" 
},{
   quote:"Goutham is one of the talented es easier is remarkbale ",
    author:"Sarah Chen",
    role:"CTO, Tech Innovators",
    avatar:"/user.jpg" 
},
{

   quote:"Goutham is one of the talented engineers I've worked with . His attention to detail making complex things easier is remarkbale ",
    author:"Sarah Chen",
    role:"CTO, Tech Innovators",
    avatar:"/user.jpg" 
  },{
   quote:"rkbale ",
    author:"Sarah Chen",
    role:"CTO, Tech Innovators",
    avatar:"/user.jpg" 
},{
   quote:"Goutham is one of the talented es easier is remarkbale ",
    author:"Sarah Chen",
    role:"CTO, Tech Innovators",
    avatar:"/user.jpg" 
}
]

const Testimonials = () => {

const [activeIdx,setActiveIdx]=useState(0)

const next=()=>{

  setActiveIdx(prev=>(prev+1)%testimonials.length);
}
useEffect(()=>{

const interval=setInterval(()=>{ next()},4000)

return ()=> clearInterval(interval);
},[])




const previous=()=>{

  setActiveIdx(prev=>(prev-1+testimonials.length)%testimonials.length);
}
  return (
    <section id="testimonials" className='py-32 relative overflow-hidden' >

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-green-900/30 rounded-full blur-3xl"/>
<div className="container mx-auto px-6 relative z-10">
 <div className="text-center mx-auto max-w-3xl  mb-16">
<span className="text-red-800 text-lg font-medium tracking-wider animate-fade"> What People Say</span>
 <p className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade animation-delay-100 text-red-800"> 
Kind Words From 
<span className="italic text-white"> amazing People</span>
 </p>
 </div>
<div className="max-w-4xl mx-auto ">
  <div className="relative">
     <div className="rounded-3xl   bg-gray-900/60 p-8 md:p-12 animate-fade animation-delay-200   ">
      <div className="bg-green-500 h-12 w-12 rounded-full absolute -top-4 -left-8 flex items-center justify-center "> 
        <Quote className="w-6 h-6 text-black"/> 
      </div>
      <p className="text-xl md:text-2xl font-medium leading-relaxed mb-8 pt-4">{testimonials[activeIdx].quote}</p>
       <div className=" flex items-center gap-4">
        <img className="h-14 w-14 object-cover rounded-full ring-2 ring-red-800/70" src={testimonials[activeIdx].avatar}/>
      <div>
        <div className="font-semibold"> {testimonials[activeIdx].author}</div>
        <div className="text-sm text-gray-300">{testimonials[activeIdx].role}

        </div>
      </div>
      </div>
      </div>
   <div className="transition-all duration-200 flex items-center justify-center gap-4 mt-8">
    <button onClick={previous} className="p-3 rounded-full hover:bg-red-600/60 cursor-pointer  transition-all duration-300 "><ChevronLeft/> </button>
   <div className="flex items-center gap-2 ">{testimonials.map((_,idx)=>
  
  <button onClick={()=>setActiveIdx(idx)} className={`cursor-pointer rounded-full w-2 h-2 ${idx==activeIdx?'w-8 bg-green-700':'bg-gray-500 hover:bg-gray-500/50'} `}/>
  
  )}
    </div>
   
   <button onClick={next} className="p-3 rounded-full hover:bg-red-600/60 cursor-pointer  transition-all duration-300">
    <ChevronRight/> 
   </button>
   </div>

  </div>
 
</div>

</div>
     
    </section>
  )
}

export default Testimonials