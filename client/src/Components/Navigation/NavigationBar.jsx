import { Link } from 'react-router-dom'
import styled from 'styled-components'

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
            align-content: center;
        }
        ul li {
            display: inline;
            list-style-type: none;
        }
        ul li + li {
            margin-left: 10px;
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
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/services">Services</Link></li>
            </ul>
        </Nav>
    </div>
  )
}

export default NavigationBar
