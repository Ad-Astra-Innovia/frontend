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

// export const CardContainer = styled.div`
//     display: grid;
//     grid-template-columns: 1fr 1fr 1fr 1fr;
//     gap: 35px;
    
//     /* background: hsla(240,25%,50%,1); */

//     .card {
//         display: flex;
//         flex-direction: column;
//         flex: 1 1 200px;
//         max-width: 600px;
//         height: 650px;
//         padding: 15px;
//         background-color: whitesmoke;
//         border-radius: 15px;
//         box-shadow: 2px 2px 6px black;

//         img{
//             width: 100%;
//             min-width: 200px;
//             min-height: 200px;
//             max-width: 800px;
//             max-height: 300px;
//             border-radius: 5px;
//         }

//         .text-container {
//             color: black;
//             display: flex;
//         }

//         h2 {
//             margin: 0;
//             padding: 0;
//             padding: 5px 0;
//         }

//         p{
//             margin: 0;
//         }

//         ul{
//             margin-top: 0;

//             li {
//                 list-style: '🔑 ';
//             }
//         }

//         .cta-button {
//             background-color: hsla(237, 100%, 70%, 1);
//             color: white;
//             padding: 10px 20px;
//             border-radius: 5px;
//             text-align: center;
//             text-decoration: none;
//             margin-top: 10px;
//         }

//         .cta-button:hover {
//             background-color: hsla(237, 100%, 60%, 1);
//         }
//     }
// `


export const EssentialPackContainer = styled.div`
    display: flex; 
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 20px;
    /* background-color: #f0f0f0; */
    /* border-radius: 10px; */
    /* box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); */
    /* margin: 20px 0; */
    
    .essential-pack-title {
        font-size: 1.5rem;
        font-weight: bold;
        margin-bottom: 0;
        letter-spacing: 1px;

        span {
            font-size: 1.89rem;
            font-weight: 600;
            font-family: cursive;
            letter-spacing: 1.02px;
            /* color: hsla(211, 100%, 50%, 1); */
            color: hsla(237, 100%, 70%, 1);
        }
    }

    p {
        font-size: 1rem;
        color: hsla(0, 0%, 33%, 1);
        margin: 10px 0 30px;
        text-align: center;
        width: 600px;
    }

    .three-pack {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
        width: 100%;
        /* flex-wrap: wrap; */

        .card {
            background-color: white;
            border-radius: 10px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            /* margin: 10px; */
            padding: 20px;
            width: calc(33% - 40px);
            display: flex;
            flex-direction: column;
            align-items: center;

            .image {
                width: 100%;
                height: auto;
                img.visual {
                    max-width: 100%;
                    height: auto;
                    border-radius: 5px;
                }
            }

            .message {
                text-align: center;

                .vision-text {
                    font-size: 1rem;
                    color: hsla(0, 0%, 33%, 1);
                    width: 100%;
                }
            }
        }

         .normal-card {
            background-color: hsla(0, 0%, 100%, 1);
            border: 1px solid hsla(0, 0%, 90%, 1);
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            max-width: 350px;
            min-height: 250px;
            max-height: 350px;
            .message {
                text-align: center;
                h2 {
                    font-size: 1.2rem;
                    color: hsla(237, 100%, 70%, 1);
                    font-weight: bold;
                    margin-bottom: 10px;
                }
                .vision-text {
                    font-size: 1rem;
                    color: hsla(0, 0%, 33%, 1);
                }
                a {
                    /* color: hsla(211, 100%, 50%, 1); */
                    color: hsla(237, 100%, 60%, 1);
                    text-decoration: none;
                    font-weight: bold;
                    margin-top: 10px;
                    display: inline-block;

                    &:hover {
                        text-decoration: underline;
                        color: hsla(237, 100%, 50%, 1);
                    }
                }
            }
         }
        
        .highlighted-card {
            /* background-color: hsla(211, 100%, 50%, 1); */
            /* border: 1.9 solid hsla(211, 100%, 40%, 1); */
            background-color: hsla(237, 100%, 70%, 1);
            border: 1.9 solid hsla(237, 100%, 60%, 1);
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
            max-width: 450px;
            max-height: 450px;
            min-height: 320px;
            .message {
                text-align: center;

                h2 {
                    font-size: 1.5rem;
                    color: hsla(0, 0%, 97%, 1);
                    font-weight: bold;
                    margin-bottom: 10px;
                }

                .vision-text {
                    font-size: 18px;
                    color: whitesmoke;
                }
                a {
                    color: hsla(0, 0%, 97%, 1);
                    /* text-decoration: underline; */
                    font-weight: bold;
                    margin-top: 10px;
                    display: inline-block;

                    &:hover {
                        text-decoration: underline;
                        color: hsla(0, 0%, 90%, 1);
                    }
                }
            }
        }

        .exceptional-card{
            background-color: hsla(237, 100%, 50%, 1);
            border: 1.9 solid hsla(237, 100%, 70%, 1);
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
            max-width: 350px;
            max-height: 350px;
            min-height: 250px;
            .message {
                text-align: center;

                h2 {
                    font-size: 1.5rem;
                    color: hsla(0, 0%, 97%, 1);
                    font-weight: bold;
                    margin-bottom: 10px;
                }

                .vision-text {
                    font-size: 18px;
                    color: whitesmoke;
                }
                a {
                    color: hsla(0, 0%, 97%, 1);
                    /* text-decoration: underline; */
                    font-weight: bold;
                    margin-top: 10px;
                    display: inline-block;

                    &:hover {
                        text-decoration: underline;
                        color: hsla(0, 0%, 90%, 1);
                    }
                }
            }
        }
    }



    @media (max-width: 768px) {
        .three-pack {
            flex-direction: column;
            align-items: center;

            .card {
                width: 100%;
                max-width: 400px;
            }
        }
    }
`