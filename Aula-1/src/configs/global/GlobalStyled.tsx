// instale o Styled-Components com o comando: npm install styled-components

import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
   * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    a {
        text-decoration: none
    }

    body {
        font-family: "Poppins", sans-serif;
    }

`;
