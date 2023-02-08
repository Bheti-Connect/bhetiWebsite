import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
        font-family: 'Montserrat', sans-serif;
    }

    body{
        font-size: 1.2rem;
        position: relative;
    }
    body::-webkit-scrollbar{
        width: 7px;
    }
    body::-webkit-scrollbar-track{
        width: 7px;
        background: #333;
    }
    body::-webkit-scrollbar-thumb{
        border-radius: 10px;
        background: linear-gradient(171.21deg, #554DDE -10.74%, #F44E77 112.82%, #F44E77 112.82%);
    }
    body::-webkit-scrollbar-thumb:hover{
        border-radius: 10px;
        background: linear-gradient(300.81deg, #554DDE -17.99%, #F44E77 111.32%, #F44E77 111.32%);
    }

    a{
        font-weight: 500;
        font-family: inherit;
        font-size: inherit;
        text-decoration: none;
    }

    p{  
        font-family: 'Open Sans', sans-serif;
        font-weight: 500;
        font-size-adjust: 1.6rem;
    }

    //utility classes
    .u-pad-lg{
        padding: 8rem 18rem;
        @media only screen and (max-width: 768px){
            padding: 8rem 18rem 8rem 2rem;
        }
        @media only screen and (max-width: 425px){
            padding: 8rem 0.2rem 8rem 18rem;
        }
    }
    .u-pad-lg-2{
        padding-top: 1rem;
        padding-left: 18rem;
        padding-right: 18rem;
        padding-bottom: 6rem;
        @media only screen and (max-width: 2560px) and (min-width: 1460px){
            padding-top: 0rem;
            padding-left: 0rem;
            padding-right: 0rem;
            padding-bottom: 0rem;
        }
        @media only screen and (max-width: 500px) {
            padding-top: 0rem;
            padding-left: 0rem;
            padding-right: 0rem;
            padding-bottom: 0rem;
        }
    }

    .arrow{
        margin-left:0.5rem;
        i{
            font-size: .9rem;
            animation: moveLR 2s infinite;
        }

        @keyframes moveLR {
            0%{
                transform: translateX(0);
            }
            50%{
                transform: translateX(10px);
            }
            100%{
                transform: translateX(0);
            }
        }
    }

    .title-con{
        text-align: center;
        width: 60%;
        margin: 0 auto;
        p{
            text-align: center;
            padding-top: 2rem;
            padding-bottom: 2rem;
        }
    }
`

export default GlobalStyle;