import styled from "styled-components";


/**
 * Styled component for the HeroSection.
 * 
 * This component is a styled `div` that serves as the container for the hero section of the page.
 * It uses flexbox to arrange its children in a row with space between them.
 * 
 * @component
 * @example
 * return (
 *   <HeroSection>
 *     <div className="hero-text">
 *       <h1>Title</h1>
 *       <h2>Subtitle</h2>
 *       <p>Some text</p>
 *       <a href="/link">Call to Action</a>
 *     </div>
 *   </HeroSection>
 * );
 * 
 * @styles
 * .hero-text {
 *   width: 600px;
 * }
 * .hero-text p + p {
 *   margin-top: 0;
 * }
 * .hero-text h1, .hero-text h2 {
 *   margin: 0;
 * }
 * .hero-text h2 {
 *   color: hsla(237, 100%, 70%, 0.667);
 * }
 * .hero-text a {
 *   background-color: hsla(237, 100%, 70%, 0.667);
 *   color: white;
 *   padding: 10px 20px;
 *   border-radius: 5px;
 *   text-decoration: none;
 * }
 * .hero-text a:hover {
 *   background-color: hsla(237, 100%, 70%, 0.9);
 * }
 */
export const HeroSection = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 0 50px;
    gap: 50px;
    align-items: center;
    height: 100vh;

    .hero-text {
        width: 600px;
        P + p {
            margin-top: 0;
        }
        h1 , h2 {
            margin: 0;
        }
        h2 {
            color: hsla(237, 100%, 70%, 0.667);
        }
        a {
            background-color: hsla(237, 100%, 70%, 0.9);
            color: white;
            padding: 10px 20px;
            border-radius: 5px;
            text-decoration: none;
        }
        a:hover {
            background-color: hsla(237, 100%, 70%, 0.667);
        }
    }
`

export const ImageBox = styled.div`
    img {
        width: 550px;
        height: 350px;
        border-radius: 5px;
    }
`

export const Section = styled.section`
    display: flex;
    flex-direction: row;
    padding: 0 50px;
    gap: 50px;
    margin: 50px 0;
    height: 90vh;
    /* align-content: center; */

    /* About section */

    .about-overlay {
        background-color: hsla(237, 100%, 70%, 0.667);
        width: 100%;
        height: 90vh;
        position: absolute;
        top: 100vh;
        left: 0;
        z-index: -1;
    }

    .socials {
        display: flex;
        gap: 10px;
        flex-direction: row;
        margin: 20px 0;
        background-color: none;
    }

    .socials a {
        color: white;
        background-color: hsla(237, 100%, 70%, 0);
        transition: all 0.1s ease-in-out;
    }

    .socials a img {
        width: 50px;
        height: 50px;
    }

    .socials a:hover {
        background-color: hsla(237, 100%, 70%, 0);
        scale: 1.09;
    }

    div img {
        width: 600px;
        height: 380px;
        border-radius: 5px;
    }
    
    a {
        background-color: hsla(237, 100%, 70%, 0.667);
        color: white;
        padding: 10px 20px;
        border-radius: 5px;
        text-decoration: none;
        transition: all 0.1s ease-in-out;
    }

    a:hover {
        background-color: hsla(237, 100%, 70%, 0.9);
        text-decoration: none;
        scale: 1.5;
    }

    p {
        margin: 0;
        width: 600px;
    }
    h2 {
        margin: 0;
    }

    /* Services section */

    .services-text {
        width: 600px;
        padding: 3% 0 0 0;


        ul{
            list-style-type: none;
        }
    }
`