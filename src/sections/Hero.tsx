import { ArrowRight, Download } from "lucide-react";
import Button from "../Components/Button";

const Hero = () => {

const dots = [...Array(100)].map(() => ({
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
  animation:`slowdrift ${15+Math.random()*30}s ease-in-out infinite`,
  animationDelay:`${Math.random()*15}s`
}));

  return (
    <section className="min-h-screen relative flex items-center overflow-hidden">
  <div className="absolute inset-0" >
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

<div className="relative mx-auto px-6 pt-32 pb-20">

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
  <h1 className="text-4xl md:text-5xl pointer-events-none leading-tight animate-fade animation-delay-500">Iam a <span className="glow text-green-400 text-shadow-sm text-shadow-green-300 ">
    FullStack Developer
    </span>
    <br/>
React.js . Node.js
     <br/>

  <span className="font-serif">
     Type Script
  </span>
  
     </h1>
     <p className="text-lg max-w-lg animate-fade animation-delay-600">
     Iam a  Software Engineer experienced in React, Node.js, TypeScript, and Next.js, creating performant and secure full-stack applications.
     </p>
</div>

<div className="flex flex-wrap gap-4 animate-fade animation-delay-200 justify-around">
<Button className="inline-flex items-center gap-2" size="lg"><span> Contact Me </span> <ArrowRight className="w-5 h-5"/> </Button>

<Button className="inline-flex animate-border bg-green-800/50 items-center gap-2" size="lg"><span> Download Resume</span> <Download className="w-5 h-5"/> </Button>

 
  </div>  
</div>

{/* Right Part */}
<div>

</div>
</div>

</div>


    </section>
  )
}

export default Hero