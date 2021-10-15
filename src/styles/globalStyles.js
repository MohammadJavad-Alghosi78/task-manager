import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Josefin Slab', serif;
    }

    html, body {
        height: 100vh;
        background: linear-gradient(100deg, rgb(182, 40, 111) 50%, #ac2066 0);
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    /* TOP MARGINS */
    .mt-2 {
        margin-top: 2px;
    }
    .mt-4 {
        margin-top: 4px;
    }
    .mt-8 {
        margin-top: 8px;
    }
    .mt-12 {
        margin-top: 12px;
    }
    .mt-16 {
        margin-top: 16px;
    }
    .mt-20 {
        margin-top: 20px;
    }

    /* BOTTOM MARGINS */
    .mb-2 {
        margin-bottom: 2px;
    }
    .mb-4 {
        margin-bottom: 4px;
    }
    .mb-8 {
        margin-bottom: 8px;
    }
    .mb-12 {
        margin-bottom: 12px;
    }
    .mb-16 {
        margin-bottom: 16px;
    }
    .mb-20 {
        margin-bottom: 20px;
    }

    /* RIGHT MARGINS */
    .mr-2 {
        margin-right: 2px;
    }
    .mr-4 {
        margin-right: 4px;
    }
    .mr-8 {
        margin-right: 8px;
    }
    .mr-12 {
        margin-right: 12px;
    }
    .mr-16 {
        margin-right: 16px;
    }
    .mr-20 {
        margin-right: 20px;
    }

    /* LEFT MARGINS */
    .ml-2 {
        margin-left: 2px;
    }
    .ml-4 {
        margin-left: 4px;
    }
    .ml-8 {
        margin-left: 8px;
    }
    .ml-12 {
        margin-left: 12px;
    }
    .ml-16 {
        margin-left: 16px;
    }
    .ml-20 {
        margin-left: 20px;
    }
`;

export default GlobalStyles;
