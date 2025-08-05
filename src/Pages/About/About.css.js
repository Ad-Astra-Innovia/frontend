import styled from "styled-components";
import { Section } from "../Home/Home.css";

export const EthosSection = styled.section`
    display: flex;
    width: 100%;
    padding: 30px 25px;
    position: relative;
    left: -25px;
    z-index: -1;
    height: fit-content;
    gap: 100px;
    justify-content: center;
    align-items: top;
    background-color: hsla(238, 94%, 80%, 0.493);
    
    div {
        width: 30%;
    }

    div h2 {
        color: hsla(238, 84%, 65%, 0.973);
        font-weight: 600;
        margin-bottom: 10px;
    }

    div h2, p {
        margin: 0;
    }

`

export const ServicesSection = styled(Section)`
    display: flex;
`

export const WorkCarouselSection = styled(Section)`
    height: fit-content;
    background-color: hsla(238, 94%, 80%, 0.493);

    div ul {
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 25px;
    }

    ul li {
        list-style: none;
    }

    ul li + li {
        margin-left: 25px;
    }
`
