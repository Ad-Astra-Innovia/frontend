/* eslint-disable react/no-unescaped-entities */
import 'react'
import styled from 'styled-components'


const FooterSection = styled.footer`
    /* width: 100%;
    height: 22vh;
    padding: 0 20px;
    position: relative;
    margin: 0;
    background-color: hsla(238, 94%, 80%, 0.493);
    ul li {
        display: inline;
        margin-right: 20px;
    } */

    height: 22vh;
    width: 100%;
    padding: 15px;
    position: relative;
    left: -15px;
    background-color: hsla(238, 94%, 80%, 0.493);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    p {
        max-width: 80%;
        margin-bottom: 10px;
    }

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        gap: 20px;
        flex-wrap: wrap;
        justify-content: center;
    }

    li {
        display: flex;
        align-items: center;
        gap: 8px;
    }

    a {
        text-decoration: none;
        color: inherit;
        font-weight: bold;
    }

`

const Footer = () => {
return (
    <FooterSection>
        <p><strong>Let's Build the Future of Education Together! </strong>
        Interested in bringing digital transformation to your school? Contact us today and let's discuss how Ad Astra Innovia can help.</p>
        <ul>
            <li>📍 Location: Nairobi, Kenya</li>
            <li>📧 Email: <a href="mailto:erickgitahi@gmail.com">hello@adastrainnovia.com</a></li>
            <li>📞 Call Us: <a href="tel:+254707568974">0707568974</a></li>
        </ul>
    </FooterSection>
)
}

export default Footer
