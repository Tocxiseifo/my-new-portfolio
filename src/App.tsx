
import { useEffect } from 'react';
import './App.css'
import HeroSection from './components/HeroSection'
import NavBar from './components/LayOut/NavBar'
import ProjectSection from './components/PojectSection/ProjectSection'
import AboutMeSection from './components/About Me Section/AboutMeSection';
import MySkillsSection from './components/MySkills Section/MySkillsSection';
import ContactSection from './components/Contact Section/ContactSection';




function App() {
  useEffect(() => {
    window.scrollTo(0, 0);

    // منع المتصفح من استعادة مكان السكرول القديم
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);
  return (    
    <>
      <div className='bg-main-color w-full h-1400 lg:h-1050 font-seif overflow-hidden relative aspect-3/4'>
        <NavBar />
        <HeroSection />
        <ProjectSection />
        <MySkillsSection />
        <AboutMeSection />  
        <ContactSection/>
      </div>
    </>
  )
}

export default App
