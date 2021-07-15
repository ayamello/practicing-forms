import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: Roboto;
        src: url(./assets/fonts/Roboto/Roboto-Regular.ttf);
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        height: 100vh;
        font-family: Roboto;
        background: linear-gradient(to bottom, #FF8DA9, #FFEB84);
    }
`;

export default GlobalStyle;