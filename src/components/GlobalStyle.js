import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
}
html{
    @media (max-width: 1700px){
        font-size: 75%;
    }
    @media (max-width: 1300px){
        font-size: 75%;
    }
    @media (max-width: 1300px){
        font-size: 75%;
    }
    
}
body{
    background: #1b1b1b;
    font-family: 'Inter', sans-serif;
    overflow-x: hidden;
}
body::-webkit-scrollbar{
    display: none;
}
button{
    font-weight: bold;
    font-size: 1.1.rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid #23d997;
    background: transparent;
    color: white;
    border-radius: 1rem;
    transition: all 0.4s ease;
    font-family: 'Inter', sans-serif;
    outline: none;
    &:hover{
        background-color: #23d997;
        color: white;
    }
    &:active{
        background-color: #1b1b1b;
    }
}
    h2{
        font-weight: lighter;
        font-size: 4rem;
    }
    h3{
        color: white;
    }
    h4{
        font-weight: bold;
        font-size: 2rem;
       
    }
    a{
        font-size: 1.1rem;
    }
    span{
        font-weight: bold;
        color:#23d997;
    }
    p{
        padding: 3rem 0rem;
        color: #ccc;
        font-size: 1.4rem;
        line-height: 150%;
    }
    img{
        border-radius: .5rem;
    }
`;

export default GlobalStyle;
