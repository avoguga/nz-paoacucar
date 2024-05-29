import { createGlobalStyle } from 'styled-components';

import { sg } from './styleGuide';

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
            /* background: ${sg.colors.neutralColors.colorNeutralSoft};
            border-radius: ${sg.borders.borderRadius.borderRadiusPill}; */
        }

        ::-webkit-scrollbar-thumb {
            /* background: ${sg.colors.neutralColors.colorNeutralClean};
            border-radius: ${sg.borders.borderRadius.borderRadiusPill}; */
        }
    }

    html, body, #root {
        height: 100%;
        min-height: 100vh;
    }
`;
