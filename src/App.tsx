
import './App.css'
import HeroSection from './components/HeroSection'
import NavBar from './components/LayOut/NavBar'
import ProjectSection from './components/PojectSection/ProjectSection'
// import useMouseTracker from './Hooks/useMouse'




function App() {
  return (    
    <>
      <div className='bg-main-color w-full h-450  relative aspect-3/4'>
        <NavBar />
        <HeroSection />
        <ProjectSection />
      </div>
    </>
  )
}

export default App
