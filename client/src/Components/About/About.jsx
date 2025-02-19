import 'react'
import { HeroSection, ImageBox, Section } from '../Home/Home.css'
import { Wrapper } from '../GlobalStyles/Containers/Wrapper'
import { EthosSection } from './About.css'

const About = () => {
  return (
    <Wrapper>
      <HeroSection style={{ height: '90vh'}}>
        <div className="hero-text">
          <h2>Empowering the Future of Education Through Technology</h2>
          <h1>About Us | Ad Astra Innovia</h1>
          <p>In a world where digital transformation is revolutionizing industries, education in Kenya has been left behind. <strong>The COVID-19 pandemic exposed a critical gap—learning institutions lacked the necessary digital infrastructure to continue educating students in times of crisis.</strong> At Ad Astra Innovia, <strong>we are here to change that.</strong></p>

          <p>We believe that <strong>access to quality education should never be disrupted.</strong> Our mission is to <strong>bridge the digital divide</strong> by equipping schools, colleges, and universities with affordable, scalable, and user-friendly digital solutions. By integrating custom-built websites, AI-powered learning assistants, and digital education platforms, we are ensuring that learning institutions can adapt, grow, and thrive in an ever-evolving technological landscape.</p>
          
          {/*Todo: feature to send a pdf quote on services and value exchanged.*/}
          <a href="/services#pricing">Join the Move</a>
        </div>
        <ImageBox  style={{ width: '600px', height: '400px', borderRadius: '5px', alignContent: 'center'}}>
          <img src='./../../../public/outdoor learning.jpg' alt="" />
        </ImageBox>
      </HeroSection>
      <EthosSection>
        <div className="mission-and-vision-text">
          <h2>Our Vision</h2>
          <p>To digitally transform education across Kenya and Africa, ensuring that every learning institution has the tools to provide continuous, engaging, and personalized education—regardless of external disruptions.</p>
        </div>
        <div className="mission-and-vision-text">
          <h2>Our Mission</h2>
          <p>To empower schools and universities with innovative digital solutions that make education accessible, interactive, and resilient for all students.</p>
        </div>
      </EthosSection>
      <Section>
        <div></div>
        <div></div>
      </Section>
    </Wrapper>
  )
}

export default About
