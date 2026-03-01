import Hero from "./sections/Hero"
import Navbar from './layout/Navbar'
import Contact from "./sections/Contact"
import About from "./sections/About"
import Projects from "./sections/Projects"
import Experience from "./sections/Experience"

const App = () => {
  return (
    <div className='min-h-screen overflow-x-hidden'>
  <Navbar/>
  <main>
     <Hero/>
    <About/>
    <Projects/>
    <Experience/>
    <Contact/>

  </main>

</div>
  )
}

export default App