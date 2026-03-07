import { Code, Lightbulb, Rocket, UsersIcon } from 'lucide-react'
import React from 'react'
import { useInView } from 'react-intersection-observer';

const highlights=[
  {icon:Code,title:"Code",description:"I focus on writing clean, maintainable, and well-structured code to build applications that are easy to scale and maintain."},
 {icon:Rocket,title:'Performance',description:"I enjoy optimizing applications for speed and responsiveness, improving user experience through better performance and efficient design."},
  {icon:UsersIcon,title:"Problem Solving",description:"I like breaking down complex problems and building practical solutions using modern web technologies."},
  {icon:Lightbulb,title:"Continuous Learning",description:"Technology evolves fast, and I’m always exploring new tools and improving my skills to become a better full-stack developer."}
]
const About = () => {

    const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3
  });
  return (
    <section id="about" className='py-32 relative overflow-hidden'>
  <div className='container mx-auto px-6 relative z-10'>
    <div className='grid lg:grid-cols-2 gap-16 items-center'>
      {/* Left Column */}
      <div className='space-y-8'>
        <div ref={ref} className={`${inView?'animate-fade':""}`}>
        <span className=' text-2xl font-medium tracking-widest
        
        '>About ME</span>
      </div>
<h2 className={`text-4xl md:text-5xl text-red-800 font-bold leading-tight ${inView?'animate-fade':""} animation-delay-100`}>
Building Secure & Scalable
  <span className='italic font-normal text-white'> FullStack Applications</span>
</h2>
<div ref={ref} className={`space-y-4 ${inView?'animate-fade':""} text-gray-300`}>
<p>
  I’m a software engineer with 2+ years of professional experience working in enterprise environments and building modern web applications. My focus is on full-stack development using React, TypeScript, Node.js, and PostgreSQL.
  </p>

<p>
  I enjoy developing responsive user interfaces, building clean and scalable backend APIs, and solving real-world performance and security challenges.
  </p>

<p>
I’m passionate about writing maintainable code, continuously improving my skills, and building practical applications that deliver a great user experience.
  </p>
</div>
<div ref={ref} className={`rounded-2xl bg-gray-700 p-6 ${inView?'animate-fade':""} animation-delay-300`}>
<p className='text-lg font-medium italic '>
 My goal is to build reliable, performant web applications and continuously grow as a full-stack developer.
</p>
</div>
    </div>
{/* Right Column */}

<div className='grid sm:grid-cols-2 gap-6'>
  {
    highlights.map((item,idx)=>(
   <div ref={ref} style={{animationDelay:`${(idx+1)*100}ms`}} className={`bg-gray-600 p-6  rounded-2xl ${inView?'animate-fade':""}`}>
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