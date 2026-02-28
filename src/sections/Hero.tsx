import { ArrowRight, ChevronDown, Download, Github, Linkedin, Twitter, Youtube } from "lucide-react";
import Button from "../Components/Button";

const Hero = () => {

const dots = [...Array(100)].map(() => ({
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
  animation:`slowdrift ${15+Math.random()*30}s ease-in-out infinite`,
  animationDelay:`${Math.random()*15}s`
}));


const socials=[
  {name:Github,href:"https://github.com/KORLA2"},
  {name:Linkedin,href:"https://github.com/KORLA2"},
  {name:Youtube,href:"https://github.com/KORLA2"},
  {name:Twitter,href:"https://github.com/KORLA2"},


]

const skills:string[]=[
  "React.js",
  "Next.js",
  "Redux Tool Kit",
  "TailwindCSS",
  "JavaScript",
  "C/C++",
  "Node.js",
  "Express.js",
  "PostgreSQL",


]

  return (
    <section className="min-h-screen relative flex items-center overflow-hidden">
  <div className="absolute h-full  inset-0" >
    <img src="/4.jpeg" alt="NO Image"
    className="w-full h-full pointer-events-none opacity-40 object-cover"
    />
  <div className="absolute  bg-linear-to-b from-black/20 via-black/50 to-black"/>

<div className="absolute inset-0 pointer-events-none">

{
  dots.map((dot,i)=><div className={`w-1.5 h-1.5  absolute bg-green-500 

  rounded-full  `} 
  style={dot}
  >
  </div>)
}
</div>
  </div>

<div className="relative w-full mx-auto px-6 pt-32 pb-20">

<div className="grid lg:grid-cols-2 gap-12 items-center">
{/* Left PArt */}
<div className="space-y-8">
  <div className="animate-fade"> 
    <span className="inline-flex items-center gap-2 px-4 py-2  shadow-lg shadow-green-900 text-sm">
    <span className="w-3 h-3 rounded-full bg-red-700 animate-bounce"/>
      Full Stack Developer 
    </span>
  </div>

<div className="space-y-4">
  <h1 className="text-4xl md:text-5xl pointer-events-none leading-tight animate-fade animation-delay-100">Iam a <span className="glow text-green-400 text-shadow-sm text-shadow-green-300 ">
    FullStack Developer
    </span>
    <br/>
React.js . Node.js
     <br/>

  <span className="font-serif">
     Type Script
  </span>
  
     </h1>
     <p className="text-lg max-w-lg animate-fade animation-delay-200">
     Iam a  Software Engineer experienced in React, Node.js, TypeScript, and Next.js, creating performant and secure full-stack applications.
     </p>
</div>

<div className="flex flex-wrap gap-4 animate-fade animation-delay-300 justify-around">
<Button className="inline-flex items-center gap-2" size="lg"><span> Contact Me </span> <ArrowRight className="w-5 h-5"/> </Button>

<Button className="inline-flex animate-border transition-[animate-border] duration-300 bg-green-800/50 items-center gap-2 whitespace-nowrap" size="lg"><span> Download Resume</span> <Download className="w-5 h-5"/> </Button>

 
  </div>  
 
<div className="flex items-center gap-4 animate-fade animation-delay-400 ">
  <span className="text-lg text-gray-200">Follow Me:</span>
  {
    socials.map((social,idx)=><a target="blank" style={{animationDelay:`${(idx+1)*100}ms`}} className= {` p-2 transition-all   rounded-full hover:bg-green-700/60`} key={idx} href={social.href}>{<social.name className="h-5 w-5"/>}</a>)
  }
</div>

</div>

{/* Right Part */}
  <div className="animate-fade relative animation-delay-300">
      <div className="absolute inset-0 rounded-4xl bg-linear-to-br from-orange-500 via-transparent to-orange-200/80 animate-pulse blur-2xl  "/>
      <div className="relative max-w-sm mx-auto">
         <div className="p-2 relative rounded-3xl shadow-[0_0_20px_rgba(34,197,94,0.6)]">
          <img src="/Rocky-2.png" alt="Korla Goutham" className="w-full object-cover aspect-square rounded-2xl"/> 
         {/* Floating Badges */}
            <div className="absolute -bottom-4 -right-4 rounded-xl px-4 py-3 animate">
              <div className="flex gap-3 items-center">
                <div className="h-3 w-3 bg-green-500 rounded-full animate-pulse"/>
                <span> Available for work</span>
              </div>
            </div>
         

         {/* Stats Badge */}
          <div className=" absolute -top-4 -left-4 animate rounded-xl px-4 py-3 animation-delay-400">
            <div className="text-2xl font-bold text-green-400"> 3+</div>
            <div className="text-sm text-gray-400"> Years Of Experience</div>
          </div>
         </div>
      </div>
  </div>
  
</div>
  <div className="mt-20  animate-fade animation-delay-600">
    <p className="text-lg text-center mb-6 text-gray-300">Technologies I work with</p>
    
   <div className="relative w-full overflow-hidden">
    <div className="flex  animate-slide w-max">
  {[...skills,...skills].map((skill)=>(
    <div className="px-8 py-4 shrink-0">
      <span className="text-xl font-semibold cursor-pointer  text-gray-300 transition  hover:text-green-300">{skill}</span>
      </div>
  ))}
    </div>
   </div>
  </div>
</div>

<div className="absolute bottom-5 left-1/2 -translate-x-1/2
 animate-fade animation-delay-800
">
<a href="#about" className=" flex flex-col items-center gap-2 text-gray-300 hover:text-white">
<span className="text-xs uppercase tracking-widest">Scroll</span>
<ChevronDown className="animate-bounce h-6 w-6"/>
</a>
</div>
    </section>
  )
}

export default Hero