import styled from "styled-components";

export const ServiceSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: fit-content;
    margin: 50px;
    padding-bottom: 50px;

    h2.heading {
        position: relative;
        top: -40px;
        font-size: 26px;
        font-weight: bold;
        z-index: -1;
    }
`

export const CardContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 35px;
    
    /* background: hsla(240,25%,50%,1); */

    .card {
        display: flex;
        flex-direction: column;
        flex: 1 1 200px;
        max-width: 600px;
        height: 650px;
        padding: 15px;
        background-color: whitesmoke;
        border-radius: 15px;
        box-shadow: 2px 2px 6px black;

        img{
            width: 100%;
            min-width: 200px;
            min-height: 200px;
            max-width: 800px;
            max-height: 300px;
            border-radius: 5px;
        }

        h2 {
            margin: 0;
            padding: 0;
            padding: 5px 0;
        }

        p{
            margin: 0;
        }

        ul{
            margin-top: 0;

            li {
                list-style: '🔑 ';
            }
        }

        .cta-button {
            background-color: hsla(240, 25%, 50%, 1);
            color: white;
            padding: 10px 20px;
            border-radius: 5px;
            text-align: center;
            text-decoration: none;
            margin-top: 10px;
        }

        .cta-button:hover {
            background-color: hsla(240, 25%, 40%, 1);
        }
    }
`