import Hero from "./sections/Hero"
import Navbar from './layout/Navbar'
import Contact from "./sections/Contact"
import About from "./sections/ABout"

const App = () => {
  return (
    <div className='min-h-screen overflow-x-hidden'>
  <Navbar/>
  <main>
     <Hero/>
    {/* <About/>
    <Contact/> */}

  </main>

</div>
  )
}

export default App