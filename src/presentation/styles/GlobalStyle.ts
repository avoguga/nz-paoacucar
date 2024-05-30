import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    *, *::after, *::before {
        margin: 0;
        padding: 0;
        border: 0;
        box-sizing: border-box;
        font-family: inherit;
    }

    *{
        ::-webkit-scrollbar {
            width: 4px;
        }

        ::-webkit-scrollbar-track {
            /* background:
            border-radius:  */
        }

        ::-webkit-scrollbar-thumb {
            /* background:
            border-radius: */
        }
    }

    html, body, #root {
        height: 100%;
        min-height: 100vh;
    }
`;
