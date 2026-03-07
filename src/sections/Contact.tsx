import { AlertCircle, CheckCircle, Mail, MapPin, Phone, Send } from 'lucide-react'
import React, { useState } from 'react'
import Button from '../Components/Button'
import emailjs from '@emailjs/browser'
import { useInView } from "react-intersection-observer";
const contactInfo=[{
  icon:Mail,
  label:"Email",
  value:"gouthamkorla1023@gmail.com",
  href:"mailto:gouthamkorla1023@gmail.com"
},
{
  icon:Phone,
  label:"Phone",
  value:"+918341607031",
  href:"tel:+918341607031"
},
{
  icon:MapPin,
  label:"Location",
  value:"Hyderabd, India",
  href:"#"
},
]

const Contact = () => {

    const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0
  });

const [form,setForm]=useState({
  name:"",
  email:"",
  message:""  
})

const [isLoading,setIsLoading]=useState(false);
const [SubmitStatus,setSubmitStatus]=useState({
  type:"",
  message:""
});

const handleSubmit=async(e:React.SubmitEvent<HTMLFormElement>)=>{
 e.preventDefault();
 setIsLoading(true);
 setSubmitStatus({type:"",message:""});
 try{

  const serviceid=import.meta.env.VITE_EMAILJS_SERVICE_ID
  const publickey =import.meta.env.VITE_EMAILJS_PUBLICKEY
  const templateid=import.meta.env.VITE_EMAILJS_TEMPLATE_ID
   if(!serviceid||!publickey||!templateid){
    throw new Error("Few of the required fields are empty")
   }

  let x= await emailjs.send(serviceid,templateid,{
    name:form.name,
    email:form.email,
    message:form.message
  },publickey);

  if (x.status!=200){
    throw x.text;
  }
setSubmitStatus({type:"success",message:"Thanks For your message I will get back to you Soon..."});

setForm({
  name:"",
  email:"",
  message:""  
})

  }catch(err){
setSubmitStatus({type:"error",message:err.text||"Failed to send message . Please try again later"})
  }finally{
    setIsLoading(false)

}

}

  return (
    <section id="contact" className='py-32 relative overflow-hidden' >

<div className='absolute top-0 left-0 w-full h-full'>
  <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-green-900/50 rounded-full blur-3xl'/>
  <div className='absolute bottom-1/4 right-1/4 w-64 h-64 bg-green-600/50 rounded-full blur-3xl'/>

</div>
<div className='container mx-auto px-6 relative z-10'>
<div className='text-center  max-w-3xl mx-auto mb-16'>
  <span className='text-lg text-red-800 font-medium tracking-wider' >Get In Touch</span>
  <p ref={ref} className={`text-4xl md:text-5xl font-bold mt-4 mb-6 ${inView?'animate-fade':""}  text-red-800 `}>Let's Build
     <span className='italic text-white'> something great</span> 
     </p>
  <p  ref={ref} className={`text-gray-400 ${inView?'animate-fade':""} animation-delay-100`}>Send me a message if you are interested in building stuff with me  </p>
</div>
<div className='grid lg:grid-cols-2 max-w-5xl gap-12  mx-auto'>
  <div  ref={ref} className={`p-8 bg-gray-900 rounded-3xl border ring-1 ring-green-700 border-green-800 ${inView?'animate-fade':""} animation-delay-200`}>

    <form className='space-y-6' onSubmit={(e)=>handleSubmit(e)}>
      <div > 
      <label htmlFor='name' className='block text-sm font-medium mb-2'>Name</label> 
      <input 
      onChange={(e)=>setForm((prev)=>({
        ...prev,
        name:e.target.value
      }))}
      value={form.name}
      required placeholder='Your Name...' type="text" className='bg-gray-800 px-4 py-3 rounded-xl  w-full border-2 border-green-800 focus:border-red-800 outline-none transition-all'/> 
      </div>
      <div> 
      <label htmlFor='email' 
      className='block text-sm font-medium mb-2 '>Email</label> 
      <input 
        onChange={(e)=>setForm((prev)=>({
        ...prev,
        email:e.target.value
      }))}
      value={form.email}
      required placeholder='Your Email...' type="email"
      className='px-4 py-3 bg-gray-800 rounded-xl  w-full border-2 border-green-800 focus:border-red-800 outline-none transition-all'/> 
      </div>
      <div> 
      <label htmlFor='message' className='block text-sm font-medium mb-2'>Message</label> 
      <textarea
        onChange={(e)=>setForm((prev)=>({
        ...prev,
        message:e.target.value
      }))}
      value={form.message}
      placeholder='Your Message...' rows={5} required 
      className='resize-none px-4 py-3 rounded-xl bg-gray-800  w-full border-2 border-green-800 focus:border-red-800 outline-none transition-all'/> 
      </div>
      <Button size="lg" type="submit" disabled={isLoading} className='disabled:bg-gray-500 disabled:pointer-events-none  w-full'>
       
       {
        !isLoading?<>
        <span>
          Send Message 
          </span>
        <Send className='w-5 h-5'/>
        </>:<>Sending...</>
       }
        
      </Button>
      {
        SubmitStatus.type&&(
          <div className={`flex items-center gap-3 p-4 rounded-xl 
              ${SubmitStatus.type=="success"?"bg-green-500/10 border border-green-500/20 text-green-500":
              "bg-red-500/10 border border-red-500/20 text-red-500"}
          `}>
              {
                SubmitStatus.type==="success"?(
                  <CheckCircle className="w-5 h-5 shrink-0"/>
                ):(
                  <AlertCircle className='w-5 h-5 shrink-0'/>
                )
              }
              <p className='text-sm'>{SubmitStatus.message}</p>
          </div>
        )
      }
    </form>
  </div>
  
 <div className={`space-y-6 ${inView?'animate-fade':""} mx-auto animation-delay-400`}>
<div className='rounded-3xl  border border-green-800 ring-2 ring-green-800 p-8 bg-gray-800' >
  <p className='text-xl font-semibold mb-6'> Contact Information</p>
<div className='space-y-4'>
{
  contactInfo.map((item,idx)=>( 
    <a key={idx} href={item.href} className='flex items-center gap-4 md:p-4 rounded-xl hover:bg-red-800 transition'>

    
      <div className='md:w-12 md:h-12 rounded-xl bg-green-900 flex items-center justify-center'>
      <item.icon className='w-5 h-5 text-green-400'/>
      </div>
      <div>
        <div className='text-sm text-gray-300'>{item.label}</div>
      <div className='font-medium max-sm:text-sm'>{item.value}</div>
      </div>
    </a>
  ))
}
</div>

</div>

<div className='rounded-3xl p-8 border border-green-900 ring-2 ring-red-900'>

<div className='flex items-center gap-3 mb-4'>
<span className='w-3 h-3 bg-green-500 rounded-full animate-pulse'/>
<span className='font-medium'>Currently Available</span>
</div>
<p className='text-sm text-gray-400'>
I'm Currently open to new oppurtunities and exciting projects.
Whether you need a full time engineer or a freelance consultant,let's have a talk!!!

</p>
</div>
 </div> 

</div>

</div>
    </section>
  )
}

export default Contact