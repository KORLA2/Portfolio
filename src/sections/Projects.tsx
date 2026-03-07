import { Github, Link } from 'lucide-react'
import React from 'react'
import { useInView } from 'react-intersection-observer';

const projects=[
  {image:"/palclub.png",title:"PalClub (Coming Sooon)",description:"A social platform idea that enables users to connect randomly with new people and start real-time audio or video conversations. The goal is to build a space where users can meet, interact, and form connections instantly.",tags:["Next.js","TypeScript","PostgreSQL","WebRTC","WebSockets","TailwindCSS"]},
  
  {image:"/QuickShow.png",title:"QuickShow (Scalable Movie Booking Application)",link:"https://quick-show-hije.vercel.app/",
    github:"https://github.com/KORLA2/Quick-Show",
    description:`
   A full-stack movie ticket booking platform where theater admins manage movies and showtimes while users browse shows and reserve seats.
Designed a transactional 5-minute seat-locking mechanism to prevent concurrent booking conflicts during checkout.
Optimized performance by reducing Largest Contentful Paint from ~7s to ~1s through code splitting, lazy loading, and render optimization.
    `,
    tags:["React.js","Node.js","Express","TypeScript","PostgreSQL","Redux Took Kit","TailwindCSS"]
  },
  {image:"/Youtube.png",title:"Youtube Clone",link:"https://goutham-youtube.netlify.app/",
    github:"https://github.com/KORLA2/youtube-clone-2",
    description:"Built a Youtube Clone featuring debounced search, auto-suggestions, and live chat using API polling. Implemented a nested comment system with CRUD operations and enhanced performance with lazy loading"
    ,tags:["React.js","TailwindCSS","ContextAPI"]},
  {image:"/Netflix.png",title:"Netflix Clone GPT", link:"https://korla-goutham.netlify.app/",
    github:"https://github.com/KORLA2/netflix-clone",
    description:`
    A Netflix-inspired streaming platform built with React featuring an AI-powered movie discovery system.
Integrated Groq API to generate personalized movie recommendations based on user genre prompts.`,
   tags:["React.js","TailwindCSS","Redux Tool Kit"]},
]

const Projects = () => {

    const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2
  });
  return (
    <section id="projects" className='pb-32 relative overflow-hidden'>
<div className='absolute top-1/4 right-0 w-96 h-96 bg-red-700/35 rounded-full blur-3xl'/>
<div className='absolute bottom-1/4 right-0 w-64 h-64 bg-red-300/70 rounded-full blur-3xl'/>

  <div className='container mx-auto px-6 relative z-10'>
  <div className='text-center mx-auto max-w-3xl mb-16'>
    <span className={`text-gray-300 text-sm font-medium tracking-wider ${inView?'animate-fade':""} `}>
      FEATURED WORK
    </span>
    <h2 ref={ref} className={`text-4xl md:text-5xl text-red-800 font-bold mt-4 mb-6 ${inView?'animate-fade':""} animation-delay-100`}>
      Projects
      <span className='italic text-white'> I've built so far </span>
    </h2>
    <p ref={ref} className={`text-gray-300 ${inView?'animate-fade':""} animation-delay-200`}>
    Personal projects where I practiced building real-world web applications and improving my full-stack development skills.
    </p>
  </div>
   
   <div className='grid md:grid-cols-2  gap-8'>
    {
        projects.map((project,idx)=>(
         <div ref={ref}
          style={{animationDelay:`${(idx+1)*100}ms`}}
          className={`group  rounded-2xl cursor-pointer transition overflow-hidden ${inView?'animate-fade':""} `}>
             <div className='relative overflow-hidden aspect-video'>
               <img src={project.image} alt={project.title} className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'/>
                <div className='absolute inset-0 bg-linear-to-t from-gray-900/80 to-transparent  opacity-80 '>
                <div className='absolute inset-0 flex items-center justify-center opacity-0 gap-5 group-hover:opacity-100  transition-opacity duration-300'>
                 <a href={project.link} target="_blank" className='p-3 hover:animate-spin rounded-full hover:bg-green-700 bg-red-700 transition-all '><Link className='w-5 h-5'/></a>
                 <a href={project.github} target="_blank" className='p-3 rounded-full hover:animate-spin hover:bg-green-700 bg-red-700  transition-all '><Github className='w-5 h-5'/></a>
                  </div>
                </div>
             </div>
          <div className='p-6 space-y-4'>
            <div className='flex items-start justify-between'>
              <p className='text-xl font-semibold text-gray-200  group-hover:translate-x-1 group-hover:-translate-y-1 transition-all'>{project.title}</p>
              <Link className='w-5 h-5 text-gray-400 group-hover:text-white
              group-hover:translate-x-1 group-hover:-translate-y-1 transition-all
              '/>
            </div>
            <p className='text-sm text-gray-300'>{project.description}</p>
            <div className='flex flex-wrap gap-2'>
              {
                project.tags.map((tag,tagidx)=>(
                  <span className='px-4 py-1.5 rounded-full text-xs bg-gray-600
                  border border-gray-800/70 text-gray-300 hover:text-white transition-all duration-300
                  '>{tag}</span>
                ))
              }
            </div>
          </div>
          </div>
         
         
        ))
    }
   </div>
</div>
    </section>
  )
}

export default Projects