import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import NavigationBar from '@components/Navigation/NavigationBar'
import Home from '@pages/Home/Home'
import About from '@pages/About/About'
import Services from '@pages/Services/Services'
import Footer from '@components/Footer/Footer'

function App() {

  return (
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="*" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
  )
}

export default App
