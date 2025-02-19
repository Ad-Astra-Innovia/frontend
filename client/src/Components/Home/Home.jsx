import { HeroSection, ImageBox, Section } from './Home.css'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <HeroSection>
        <div className='hero-text'>
          <h2>Software Solutions for Learning Institutions</h2>
          <h1>Transforming Education Through Technology</h1>
          <p>Education is evolving, and so should the way we learn. At Ad Astra Innovia, we provide modern, scalable, and efficient digital solutions tailored for learning institutions. Our goal is to revolutionize education by integrating <strong>AI-powered learning tools, smart web platforms, and seamless school management systems</strong>—ensuring <strong>accessibility, engagement, and resilience</strong> in the face of disruptions.</p>
          <p>Join us in <strong>shaping the future of education with innovative technology</strong> that empowers students, educators, and institutions.</p>
          <Link to="/about">About Us</Link>
        </div>
        <ImageBox>
          <img src="./../../../public/classroom-grayscale.jpg" alt="hero" />
        </ImageBox>
      </HeroSection>
      <Section>
        <div className="about-overlay"></div>
        <div>
          <img src="./../../../public/classroom.jpg" alt="Classroom" />
        </div>
        <div>
          <h1>About Us.</h1>
          <p>At Ad Astra Innovia, we are dedicated to transforming education through technology-driven solutions. Our mission is to bridge the digital gap in schools, enabling institutions to seamlessly integrate online learning, AI-powered tools, and efficient school management systems. By leveraging innovation, we empower schools to adapt, grow, and deliver quality education, no matter the challenges.</p>
          <div className="socials">
            <a href="https://www.facebook.com"><img src="./../../../public/icons8-facebook-100.png" alt="Facebook" /></a>
            <a href="https://www.twitter.com"><img src="./../../../public/icons8-x-100.png" alt="Twitter" /></a>
            <a href="https://www.linkedin.com"><img src="./../../../public/icons8-linkedin-100.png" alt="LinkedIn" /></a>
          </div>
          <Link to="/about">Learn More</Link>
        </div>
      </Section>
      <Section>
        <div>
          <img src="./../../../public/library.jpg" alt="Online Learning" />
        </div>
        <div className='services-text'>
          <h2>Our Solutions</h2>
          <p>We provide customized digital solutions designed specifically for learning institutions:</p>
          <ul>
            <li>✔️ <strong>School Websites & Web Apps</strong> – Establish a strong online presence with seamless student, teacher, and parent engagement.</li>
            <li>✔️ <strong>AI-Powered Learning Systems</strong> – Deliver personalized education through AI-driven insights and recommendations.</li>
            <li>✔️ <strong>Remote Learning & Digital Classrooms</strong> – Enable schools to continue learning anytime, anywhere with modern e-learning tools.</li>
            <li>✔️ <strong>Smart School Management Systems</strong> – Simplify operations with automated administration, attendance tracking, and fee management.</li>
          </ul>
          <p>🔹 Affordable. Scalable. Future-proof. Get your school digitally ready today!</p>
        </div>
      </Section>
    </div>
  )
}

export default Home
