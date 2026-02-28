import { Code, Lightbulb, Rocket, UsersIcon } from 'lucide-react'
import React from 'react'

const highlights=[
  {icon:Code,title:"Code",description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, consequuntur? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, consequuntur?"},
 {icon:Rocket,title:'Performance',description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, consequuntur?"},
  {icon:UsersIcon,title:"Collaboration",description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, consequuntur?"},
  {icon:Lightbulb,title:"Innovation",description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, consequuntur?"},
]
const About = () => {

  return (
    <section id="about" className='py-32 relative overflow-hidden'>
  <div className='container mx-auto px-6 relative z-10'>
    <div className='grid lg:grid-cols-2 gap-16 items-center'>
      {/* Left Column */}
      <div className='space-y-8'>
        <div className='animate-fade'>
        <span className='text-red-700 text-2xl font-medium tracking-wider
        
        '>About ME</span>
      </div>
<h2 className='text-4xl md:text-5xl text-red-800 font-bold leading-tight animate-fade animation-delay-100'>
  Building Future
  <span className='italic font-normal text-white'>  one component at a time</span>
</h2>
<div className='space-y-4 animate-fade text-gray-300'>
<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia, suscipit exercitationem. Molestiae, in facilis. Suscipit id officiis voluptatibus quod consequuntur fugit vel maxime non nesciunt reprehenderit! Laboriosam ea expedita excepturi quo a!</p>
<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, eum!</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi optio modi, totam voluptas nam quisquam quasi ut laborum et eligendi?</p>
</div>
<div className='rounded-2xl bg-gray-700 p-6 animate-fade animation-delay-300'>
<p className='text-lg font-medium italic '>
  My Mission is to create digital experiences that are not funcitonal 
</p>
</div>
    </div>
{/* Right Column */}

<div className='grid sm:grid-cols-2 gap-6'>
  {
    highlights.map((item,idx)=>(
   <div style={{animationDelay:`${(idx+1)*100}ms`}} className='bg-gray-600 p-6  rounded-2xl animate-fade'>
    <div className='w-12 h-12 rounded-xl cursor-pointer bg-red-500/50 transition-all flex justify-center items-center mb-4 hover:bg-green-500/50'>
    <item.icon className='h-6 w-6 text-black'/></div>
    <p className='text-lg font-semibold mb-2'>{item.title}</p>
    <p className='text-sm text-gray-300'>{item.description}</p>
    </div>
    ))
  }
</div>
        </div>

  </div>
    </section>
  )
}


export default About