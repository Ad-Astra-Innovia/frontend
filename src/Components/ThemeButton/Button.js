// src/Components/ThemeButton/Button.js
// This file contains the styled component for the ThemeButton
import styled from "styled-components";


export const StyledThemeButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding: 0.25rem;
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: whitesmoke;
    border-radius: 50%;

    &:focus, &:active {
        border: none;
        outline: none;
        box-shadow: none;
    }
    &:hover {
        scale: 1.02;
        backdrop-filter: blur(20px);
    }


`

