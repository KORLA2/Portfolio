import React from 'react'

const experiences=[
  {
    period:"2023 - Present",
    role:"Software Engineer Associate",
    company:"Infor",
    description:" WOrked on Vulnerabilities in web application",
    technologies:["ASP.NET","JavaScript","C++","SQLServer"]
  },
  {
    period:"2021 - 2023",
    role:"Student",
    company:"JNTUH College of Engineering Jagtial",
    description:"",
    technologies:["React.js","Node.js","PostgreSQL","SQLServer"]
  },{
    period:"2023 - Present",
    role:"Software Engineer Associate",
    company:"Infor",
    description:"",
    technologies:["ASP.NET","JavaScript","C++","SQLServer"]
  },
  {
    period:"2021 - 2023",
    role:"Student",
    company:"JNTUH College of Engineering Jagtial",
    description:"",
    technologies:["React.js","Node.js","PostgreSQL","SQLServer"]
  }

]

const Experience = () => {
  return (
    <section id="experience" className='pb-32 relative overflow-hidden'>
    <div className='absolute top-1/2 left-1/4 w-96 h-96 bg-green-900/40 rounded-full blur-3xl -translate-y-1/2'/>
    <div className='container mx-auto px-6 relative '>
      <div className='max-w-3xl mb-16'>
      <span className='text-red-600 text-xl font-medium tracking-wider animate-fade'> Career Journey </span>
      <p className='text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade animation-delay-100 text-red-700'>
        Experience That
      <span className='italic text-white'> Speaks Volumes</span>
      </p>
      <p className='text-gray-300 animate-fade animation-delay-200'>
        A time line of Professional Growth , from curious beginner  to senior engineer leading to teams building 
        producst at scale
      </p>
      </div>
      {/* Time LIne */}
      <div className='relative'>
        <div className='absolute animate-fade left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-red-500/80 via-red-700/80 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)] '/>
        <div className='space-y-12'>
        {
          experiences.map((exp,idx)=>(
            <div key={idx} className='relative grid md:grid-cols-2 gap-8 animate-fade'
             style={{animationDelay:`${(idx+1)*100}ms`}}
            >

              <div className='absolute rounded-full  animate-fade left-0 md:left-1/2  -translate-x-1/2 ring-4 ring-green-800  top-0 w-3 h-3 bg-green-500  '> 
              <span className='animate-ping bg-red-500 absolute inset-0 opacity-75 rounded-full'></span>
              </div>
              <div className={`pl-8 md:pl-0 
               ${idx%2==0?"md:pr-16 md:text-right":"md:pl-16 md:col-start-2"}
                `}>
                <div className='p-6 group bg-gray-700 hover:bg-gray-800 rounded-2xl border transition-all duration-500 border-gray-400/40 hover:border-gray-400/80 cursor-pointer '>
                  <span className='text-lg font-medium text-green-400/90'>{exp.period}</span>
                  <p className='text-xl font-semibold mt-2'>{exp.role}</p>
                  <p className='text-gray-300 mt-2'>{exp.company}</p>
                  <p className='text-sm text-gray-300 mt-4'> {exp.description}</p>
                  <div className={`flex flex-wrap gap-2 mt-2 ${idx%2==0?"justify-end":""}`}>
                    {
                      exp.technologies.map((tech,techidx)=>(
                        <span key={techidx} className='px-4  text-xs py-1 bg-gray-800 rounded-full group-hover:bg-gray-500'>{tech}</span>
                      ))
                    }
                  </div>
                </div>
              </div>
            </div>
          ))
        }
        </div>
      
      </div>
    </div>
    </section>
  )
}

export default Experience