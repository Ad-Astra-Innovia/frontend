// eslint-disable-next-line no-unused-vars
import {React, useState, useEffect} from 'react'
import { StyledThemeButton} from './Button'; // , sunIcon, moonIcon
import sunIcon from '/icons8-sun-100.png'
import moonIcon from '/icons8-moon-100.png'

const ThemeButton = () => {
    
   
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem('theme') === 'dark';
    });

    useEffect(() => {
        document.body.className = darkMode ? 'dark' : 'light';
        localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    }, [darkMode]);
    const buttonClass = darkMode ? "dark" : "light";

  return (
    <StyledThemeButton title={`toggle ${buttonClass} theme`} className={`theme-button ${buttonClass}`} onClick={() => setDarkMode(!darkMode)}>
      <img
          src={darkMode ? sunIcon : moonIcon}
          alt={darkMode ? 'Light Mode' : 'Dark Mode'}
          width={32}
          height={32}
        />
    </StyledThemeButton>
  )

}
export default ThemeButton
