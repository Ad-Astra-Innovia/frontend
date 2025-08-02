import 'react'
import { HeroSection, ImageBox } from '@pages/Home/Home.css'
import { Wrapper } from '@components/GlobalStyles/Containers/Wrapper'
import { EthosSection, ServicesSection, WorkCarouselSection } from './About.css'
import ServicesCards from '../Services/ServicesCards'

const About = () => {
  return (
    <Wrapper>
      <HeroSection style={{ height: '90vh'}}>
        <ImageBox  style={{ width: '550px', height: '450px', borderRadius: '5px', alignContent: 'center'}}>
          <img src='./outdoor learning.jpg' alt="" />
        </ImageBox>
        <div className="hero-text">
          <h2>Empowering the Future of Education Through Technology</h2>
          <h1>About Us | Ad Astra Innovia</h1>
          <p>In a world where digital transformation is revolutionizing industries, education in Kenya has been left behind. <strong>The COVID-19 pandemic exposed a critical gap—learning institutions lacked the necessary digital infrastructure to continue educating students in times of crisis.</strong> At Ad Astra Innovia, <strong>we are here to change that.</strong></p>

          <p>We believe that <strong>access to quality education should never be disrupted.</strong> Our mission is to <strong>bridge the digital divide</strong> by equipping schools, colleges, and universities <strong>with affordable, scalable, and user-friendly digital solutions.</strong> By integrating custom-built websites, AI-powered learning assistants, and digital education platforms, we are <strong>ensuring</strong> that <strong>learning institutions can adapt, grow, and thrive in an ever-evolving technological landscape.</strong></p>
          
          {/*Todo: feature to send a pdf quote on services and value exchanged.*/}
          <a href="/services#pricing">Join the Move</a>
        </div>
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
      <ServicesSection>
        {/* <div>
          <h2>What We Offer.</h2>
          <p>At Ad Astra Innovia, we are committed to providing the best digital solutions for schools, colleges, and universities. Our services include:</p>

          //! Build cards for the offers.
          <ul>
            <li>Custom-built websites.</li>
            <li>AI-powered learning assistants.</li>
            <li>Digital education platforms.</li>
            <li>Learner management systems.</li>
            <li>And more!</li>
          </ul>
          //! End cards on offers.

          <p>Our team of experts will work with you to understand your unique needs and develop a tailored solution that meets your goals. Whether you are looking to improve student engagement, streamline administrative processes, or enhance the learning experience, we have the tools and expertise to help you succeed.</p>
        </div> */}
        <ServicesCards/>
      </ServicesSection>
      <WorkCarouselSection>
        <div>
          <ul>
            <li>pioneer Partner school</li>
            <li>pioneer Partner school</li>
            <li>pioneer Partner school</li>
            <li>pioneer Partner school</li>
            <li>pioneer Partner school</li>
          </ul>
        </div>
      </WorkCarouselSection>
    </Wrapper>
  )
}

export default About
