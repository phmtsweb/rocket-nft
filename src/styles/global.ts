import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body {
    background-color: #000;
  }

  body, button, textarea, input {
    font-family: 'Montserrat', sans-serif;
    
  }

  button, a {
    cursor: pointer;
    transition: all 0.2s;
  }

  button:hover, a:hover {
    filter: brightness(0.85);
  }

  a, a:hover {
    text-decoration: none;
  }

  h1 {
    font-size: 3.6rem;
    font-weight: 700;
  }

  h2 {
    font-size: 2.4rem;
    font-weight: 700;
  }
`;

export default GlobalStyle;
