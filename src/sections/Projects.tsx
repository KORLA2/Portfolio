import { Github, Link } from 'lucide-react'
import React from 'react'

const projects=[
  {image:"",title:"PalClub",description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, consequuntur?",tags:["Next.js","React.js","Node.js","Express","PostgreSQL","TailwindCSS"]},
  {image:"/QuickShow.png",title:"QuickShow",link:"https://quick-show-hije.vercel.app/",
    github:"https://github.com/KORLA2",
    description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, consequuntur?",
    tags:["React.js","Node.js","PostgreSQL","TailwindCSS"]
  },
  {image:"/Youtube.png",title:"Youtube Clone",tags:["React.js","TailwindCSS"]},
  {image:"/Netflix.png",title:"Netflix Clone", github:"",description:"",link:"", tags:["React.js","TailwindCSS"]},
]

const Projects = () => {
  return (
    <section id="projects" className='pb-32 relative overflow-hidden'>
<div className='absolute top-1/4 right-0 w-96 h-96 bg-red-700/35 rounded-full blur-3xl'/>
<div className='absolute bottom-1/4 right-0 w-64 h-64 bg-red-300/70 rounded-full blur-3xl'/>

  <div className='container mx-auto px-6 relative z-10'>
  <div className='text-center mx-auto max-w-3xl mb-16'>
    <span className='text-gray-300 text-sm font-medium tracking-wider animate-fade'>
      FEATURED WORK
    </span>
    <h2 className='text-4xl md:text-5xl text-red-800 font-bold mt-4 mb-6 animate-fade animation-delay-100'>
      My Projects
      <span className='italic text-white'> that make and Impact </span>
    </h2>
    <p className='text-gray-300 animate-fade animation-delay-200'>
     My Recent Work , from complex web apps to innovativ etools solve real world probs
    </p>
  </div>
   
   <div className='grid md:grid-cols-2  gap-8'>
    {
        projects.map((project,idx)=>(
         <div
          style={{animationDelay:`${(idx+1)*100}ms`}}
          className='group  rounded-2xl cursor-pointer transition overflow-hidden animate-fade '>
             <div className='relative overflow-hidden aspect-video'>
               <img src={project.image} alt={project.title} className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'/>
                <div className='absolute inset-0 bg-linear-to-t from-gray-900/80 to-transparent  opacity-80 '>
                <div className='absolute inset-0 flex items-center justify-center opacity-0 gap-5 group-hover:opacity-100  transition-opacity duration-300'>
                 <a href={project.link} className='p-3 hover:animate-spin rounded-full hover:bg-green-700 bg-red-700 transition-all '><Link className='w-5 h-5'/></a>
                 <a href={project.github} className='p-3 rounded-full hover:animate-spin hover:bg-green-700 bg-red-700  transition-all '><Github className='w-5 h-5'/></a>
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