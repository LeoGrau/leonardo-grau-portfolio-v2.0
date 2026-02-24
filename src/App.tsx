import './App.css'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'

function App() {

  document.documentElement.classList.add('dark')

  return (
    <>
     <Navbar></Navbar>
     <Hero></Hero>
    </>
  )
}

export default App
