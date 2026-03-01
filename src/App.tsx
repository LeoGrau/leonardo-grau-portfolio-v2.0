import './App.css'
import { AboutMe } from './components/sections/AboutMe'
import { Certifications } from './components/sections/Certifications'
import { Experience } from './components/sections/Experience'
import { Hero } from './components/sections/Hero'
import { Navbar } from './components/sections/Navbar'
import { Skills } from './components/sections/Skills'

function App() {

  document.documentElement.classList.add('dark')

  return (
    <>
     <Navbar></Navbar>
     <Hero></Hero>
     <AboutMe></AboutMe>
     <Experience></Experience>
     <Skills></Skills>
     <Certifications></Certifications>
    </>
  )
}

export default App
