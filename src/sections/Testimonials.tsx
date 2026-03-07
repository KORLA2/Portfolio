import { ChevronLeft, ChevronRight, Quote, UserCircle } from "lucide-react"
import { useEffect, useState } from "react"

const testimonials=[
{

   quote:"Goutham’s contributions to the frontend and web components have been valuable to the team. His commitment and consistent effort are greatly appreciated",
    author:"NaveenKumar Desireddy",
    role:"Manager Software Development Infor",
    avatar:0,
    color:"text-green-800"
  },{
   quote:"Goutham has shown strong initiative in expanding his technical knowledge of the SmartStream platform and collaborating effectively with the team to deliver changes for the SS-Web 8.7 release",
    author:"Ilamathi Ravindran",
    role:"Manager Software Development Infor",
    avatar:0,
    color:"text-green-700"

},{
   quote:"Goutham contributed to improving the college website by implementing UI enhancements and resolving frontend issues, helping make academic information more accessible for students",
    author:"T. Venu Gopal",
    role:"Vice Principal JNTU",
    color:"text-red-800",
    avatar:0
},
{

   quote:"QuickShow demonstrates solid full-stack engineering thinking. The seat-locking mechanism and performance optimizations make it feel like a real production booking system.",
    author:"Dinakar Karengula",
    role:"Software Engineer CCG . Developer Peer",
    avatar:"/image.png" 
  }
]

const Testimonials = () => {

const [activeIdx,setActiveIdx]=useState(0)

const next=()=>{

  setActiveIdx(prev=>(prev+1)%testimonials.length);
}
useEffect(()=>{

const interval=setInterval(()=>{ next()},7000)

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
      { !testimonials[activeIdx].avatar? <UserCircle className={`h-14 w-14 ${testimonials[activeIdx].color}`} />: < img  className="h-14 w-14 object-cover rounded-full ring-2 ring-green-800/70" src={testimonials[activeIdx].avatar}/>
        }
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