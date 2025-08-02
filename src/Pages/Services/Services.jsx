/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { DivContainer } from '@components/GlobalStyles/Containers/Wrapper'
import { HeroSection, ImageBox } from '@pages/Home/Home.css'
// import ServicesCards from './ServicesCards'
import { ServiceSection } from './Services.css.js'
import EssentialPack from './EssentialPack'

const Services = () => {
  return (
    <DivContainer>
      <HeroSection>
        <div className='hero-text'>
          <h2>Transforming Education Through Innovation</h2>
          <h1>How We Help Education Evolve In Africa.</h1>
          <p>
          Education is evolving, and schools must embrace technology to stay ahead. At Ad Astra Innovia, we provide cutting-edge digital solutions that enhance learning, streamline operations, and future-proof institutions. Whether you're looking to establish a strong online presence, digitize your classrooms, or automate school management, we have the perfect solution for you.
          </p>

          <a href='#pricing' className='cta-button'>Request A Quote</a>
        </div>
          <ImageBox>
            <img src='a school somewhere in south Africa' alt='happy school child facing camera view smiling about digitized learning.'/>
          </ImageBox>
      </HeroSection>
      <ServiceSection>

        {/* <h2 className='heading'>What We Offer</h2> */}
        {/* services cards here. */}
        {/* <ServicesCards/> */}
        <EssentialPack />

      </ServiceSection>

      
    </DivContainer>
  )
}

export default Services
