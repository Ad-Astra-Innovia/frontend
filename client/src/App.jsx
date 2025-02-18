import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import NavigationBar from '@components/Navigation/NavigationBar.jsx'
import Home from '@components/Home/Home.jsx'
import About from '@components/About/About.jsx'
import Services from '@components/Services/Services.jsx'
import Footer from '@components/Footer/Footer.jsx'

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
