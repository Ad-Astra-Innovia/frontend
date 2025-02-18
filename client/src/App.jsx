import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import NavigationBar from '@components/Navigation/NavigationBar'
import Home from '@components/Home/Home'
import About from '@components/About/About'
import Services from '@components/Services/Services'
import Footer from '@components/Footer/Footer'

function App() {

  return (
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="*" element={<h1>Not Found</h1>} />
        </Routes>
        <Footer />
      </BrowserRouter>
  )
}

export default App
