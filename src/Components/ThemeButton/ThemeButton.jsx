// eslint-disable-next-line no-unused-vars
import {React, useState, useEffect} from 'react'
import { StyledThemeButton} from './Button'; 
import sunIcon from '@assets/icons8-sun-100.png'; // , sunIcon
import moonIcon from '@assets/icons8-moon-100.png';  // , moonIcon

// This component toggles between light and dark themes
// It uses localStorage to remember the user's preference
// and applies the appropriate class to the body element

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
