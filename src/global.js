import {createGlobalStyle} from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    @import url(//fonts.googleapis.com/css?family=Amatic+SC);
    @import url(//fonts.googleapis.com/css?family=Open+Sans);

    html, body {
        margin: 0;
        padding: 0;
    }
        *, *::after, *::before {
        box-sizing: border-box;
    }
        body {
        align-items: center;
        background: ${({ theme }) => theme.primaryDark};
        color: ${({ theme }) => theme.primaryLight};
        display: flex;
        font-family: 'Open Sans', sans-serif;
        height: 100vh;
        justify-content: center;
        text-rendering: optimizeLegibility;
    }

    h1 {
        color: white;
        font-family: 'Amatic SC', sans-serif;
    }
    `


