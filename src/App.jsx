import { useState, useEffect } from 'react'
import LoadingScreen from './components/LoadingScreen'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import TechStack from './components/TechStack'
import Timeline from './components/Timeline'
import Experience from './components/Experience'
import ProjectsData from './components/ProjectsData'
import SkillsData from './components/SkillsData'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 animate-fade-in">
      <Header />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Timeline />
        <Experience />
        <ProjectsData />
        <SkillsData />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
