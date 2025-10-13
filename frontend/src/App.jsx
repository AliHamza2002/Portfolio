import React from 'react'
import './App.css'
import Navbar from './portfolio/Navbar'
import Hero from './portfolio/Hero'
import Skill from './portfolio/Skill'
import About from './portfolio/About'
import Project from './portfolio/Project'

function App() {

  return (
    // Fragment
    <>
    <Navbar/>
    <Hero/>
    <Skill/>
    <About/>
    <Project/>
       
    </>
  )
}

export default App
