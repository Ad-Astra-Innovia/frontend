import { Link } from 'react-router-dom'
import styled from 'styled-components'
import ThemeButton from '@components/ThemeButton/ThemeButton'

const Nav = styled.nav`
    display: flex;
    position: fixed;
    justify-content: space-between;
    top: 0;
    left: 0;
    right: 0;
    background-color: hsla(0, 0%, 77%, 0.384);
    backdrop-filter: blur(8px);
    padding: 0px 54px;
    margin: 0;

        ul {
            display: flex;
            align-items: center;
            justify-content: center;
            align-content: center;
        }
        ul li {
            display: inline;
            list-style-type: none;
        }
        
        /* CTA button */
        ul li.button a {
            cursor: pointer;
            display: inline-block;
            background-color: hsla(237, 100%, 70%, 0.9);
            color: #fff;
            padding: 10px 20px;
            border-radius: 5px;
        }

        ul li.button a:hover {
            background-color: hsla(237, 100%, 70%, 0.667);
            text-decoration: none;
        }

        ul li + li {
            margin-left: 15px;
        }
        a:hover {
            text-decoration: underline;
        }
        h1 {
            margin: 16px 0;
            font-size: 1.5rem;
        }
        h1 a:hover {
            text-decoration: none;
        }
`
const NavigationBar = () => {
  return (
    <div>
        <Nav>
            <h1>
                <Link to="/">Ad Astra Innovia</Link>
            </h1>
            <ul>
                <li><ThemeButton /></li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li className="button"><a>Request a Quote</a></li>
            </ul>
        </Nav>
    </div>
  )
}

export default NavigationBar
