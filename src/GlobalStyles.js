import { createGlobalStyle } from 'styled-components'
const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
        &::-webkit-scrollbar {
            width: 6px;
        }
        &::-webkit-scrollbar-thumb{
        background-color: #dc143c;
        }
    }
    

    body {
        font-size: 16px;
        font-family: 'Montserrat', sans-serif;
        text-transform: uppercase;
    }

    h1 {font-size: 40px;
        font-weight: 700;
    }
    h2 {
        font-size: 20px;
    }
    h3 {
        font-size: 16px;
    }

    p {
        font-size: 14px;
    }

    ul {
        list-style: none;
    }

    a {
        cursor: pointer;
        color: inherit;
        text-decoration: none;
    }
    input {
        outline:none ;
        border: none;
    }
    button {
        cursor: pointer;
        text-transform: uppercase;
        font-family: 'Montserrat', sans-serif;
        border: none;
    }

    .btn {
        cursor: pointer;
        font-size: 14px;
        padding: 15px 40px;
    }

`
export default GlobalStyles
