import { About } from './components/About'
import { Cta } from './components/Cta'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { HowItWorks } from './components/HowItWorks'
import { Manifesto } from './components/Manifesto'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <HowItWorks />
        <Manifesto />
        <Cta />
      </main>
      <Footer />
    </div>
  )
}

export default App
