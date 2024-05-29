import { removeRem } from '../../main/helpers/functions/removeRem';
import { css } from 'styled-components';

export const sg = Object.freeze({
  fonts: {
    fontFamily: {
      fontFamilyPrimary: "'Noto Sans', sans-serif",
      fontFamilySecondary: "'Signika', sans-serif",
      fontFamilyAuxiliary: 'Tahoma, sans-serif',
    },
    fontWeight: {
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightSemiBold: 600,
      fontWeightBold: 700,
    },
    fontSize: {
      fontSizeBodySm: '1rem',
      fontSizeBodyMd: '1.2rem',
      fontSizeBodyLg: '1.4rem',
      fontSizeTitleSm: '1.8rem',
      fontSizeTitleMd: '2.2rem',
      fontSizeTitleLg: '2.8rem',
      fontSizeH3: '3.6rem',
      fontSizeH2: '4.8rem',
      fontSizeH1: '6rem',
    },
    lineHeight: {
      lineHeightSm: (fontSize: string) => `${removeRem(fontSize) + 0.4}rem`,
      lineHeightMd: (fontSize: string) => `${removeRem(fontSize) + 0.8}rem`,
      lineHeightLg: (fontSize: string) => `${removeRem(fontSize) + 1.2}rem`,
    },
  },
  colors: {
    brandColors: {
      colorBrandPrimary: '#0C3C7A',
      colorBrandSecondary: '#C3C3C3',
      colorBrandSecDark: '#636363',
      colorBrandSeSoft: '#E9EAEC',
      colorBrandDark: '#2B4450',
      colorBrandSoft: '#397B9B',
    },

    backgroundColors: {
      colorBackgroundSolo: '#E8F4F4',
      colorBackgroundSky: '#F4F6F8',
      colorBackgroundGrass: '#F5F6F6',
      colorBackgroundCarpet: '#F9F9F9',
      colorBackgroundSnow: '#FFFFFF',
    },

    neutralColors: {
      colorNeutralBlack: '#272B33',
      colorNeutralDarkest: '#3B414D',
      colorNeutralDark: '#4E5666',
      colorNeutralCloudy: '#67738B',
      colorNeutralCleanest: '#A6B0C4',
      colorNeutralClean: '#CDD1D9',
      colorNeutralSoft: '#E2E6ED',
      colorNeutralLighest: '#F4F6F8',
      colorNeutralLight: '#F9F9F9',
      colorNeutralSnow: '#FFFFFF',
    },

    feedbackColors: {
      colorFeedbackError: '#DE3333',
      colorFeedbackSuccess: '#4CAF50',
      colorFeedbackWarning: '#EDA720',
      colorFeedbackInfo: '#2196F3',
      colorFeedbackNeutral: '#ECECEC',
    },

    auxiliariesColors: {
      colorAuxOneDark: '#308FA4',
      colorAuxTwoDark: '#BAA758',
      colorAuxThreeDark: '#6E4F7B',
      colorAuxFourDark: '#2BA463',
      colorAuxFiveDark: '#C25634',
      colorAuxOneLight: '#97D0DC',
      colorAuxTwoLight: '#F0C965',
      colorAuxThreeLight: '#D297DC',
      colorAuxFourLight: '#A1D76A',
      colorAuxFiveLight: '#FF9B70',
    },
  },
  icons: {
    iconSizeXl: '4rem',
    iconSizeLg: '3.2rem',
    iconSizeMd: '2.4rem',
    iconSizeAnt: '2rem',
    iconSizeSm: '1.6rem',
    iconSizeXs: '1.2rem',
  },
  avatars: {
    avatarSizeLg: '10.4rem',
    avatarSizeMd: '7.2rem',
    avatarSizeSm: '4rem',
    avatarSizeXs: '3.2rem',
    avatarSizeNano: '2.4rem',
  },
  borders: {
    borderRadius: {
      borderRadiusNone: 'none',
      borderExtraSmall: '0.4rem',
      borderRadiusSm: '0.8rem',
      borderRadiusMd: '1.6rem',
      borderRadiusLg: '3.2rem',
      borderRadiusPill: '72rem',
    },
    borderWidth: {
      borderWidthNone: 'none',
      borderWidthThinner: '0.1rem',
      borderWidthThin: '0.2rem',
    },
  },
  shadows: {
    shadowLevelNear: `0rem 0.4rem 0.8rem rgba(0, 0, 0, 0.1)`,
    shadowLeveldistant: '0rem 2rem 4rem rgba(0, 0, 0, 0.06)',
  },
  opacityLevels: {
    dark: 0.64,
    clarifying: 0.48,
    clear: 0.32,
    light: 0.16,
  },
  spacings: {
    spacingInset: {
      spacingInsetNano: '0.8rem',
      spacingInsetXs: '1.2rem',
      spacingInsetSm: '1.6rem',
      spacingInsetMd: '2.4rem',
      spacingInsetLg: '3.2rem',
    },
    spacingSquish: {
      spacingSquishNano: '0.8rem 1.6rem',
      spacingSquishXs: '1.2rem 1.6rem',
      spacingSquishSm: '1.2rem 2.4rem',
      spacingSquishMd: '1.6rem 2.4rem',
      spacingSquishLg: '2.4rem 3.2rem',
    },
    spacingInline: {
      spacingInlineNano: '0.4rem',
      spacingInlineXs: '0.8rem',
      spacingInlineAnt: '1.2rem',
      spacingInlineSm: '1.6rem',
      spacingInlineMd: '2.4rem',
      spacingInlineLg: '3.2rem',
      spacingInlineXl: '4rem',
      spacingInlineGiant: '4.8rem',
      spacingInlineXGiant: '6.4rem',
      spacingInlineAwesome: '8rem',
    },
    spacingStack: {
      spacingStackNano: '0.4rem',
      spacingStackXs: '0.8rem',
      spacingStackSm: '1.6rem',
      spacingStackMd: '2.4rem',
      spacingStackLg: '3.2rem',
      spacingStackXl: '4rem',
      spacingStackGiant: '4.8rem',
      spacingStackXGiant: '6.4rem',
      spacingStackAwesome: '8rem',
    },
  },
  gutter: '1.6rem',
  grids: {
    platformGrid: {
      colPlatformSm: css`
        display: grid;
        grid-template-columns: repeat(4, minmax(calc(25% - 3.2rem), 1fr));
        grid-column-gap: 1.6rem;
        padding: 0 1.6rem;
      `,
      colPlatformMd: css`
        display: grid;
        grid-template-columns: repeat(4, minmax(calc(25% - 3.2rem), 1fr));
        grid-column-gap: 1.6rem;
        padding: 0 1.6rem;
      `,
      colPlatfomrLg: css`
        display: grid;
        grid-template-columns: repeat(12, minmax(calc(8.3333% - 6.4rem), 1fr));
        grid-column-gap: 1.6rem;
        padding: 0 4.8rem;
      `,
    },
    WebSiteGrid: {
      colWebSiteSm: css`
        display: grid;
        grid-template-columns: repeat(4, minmax(calc(25% - 3.2rem), 1fr));
        grid-column-gap: 1.6rem;
        padding: 0 1.6rem;
      `,
      colWebSiteMd: css`
        display: grid;
        grid-template-columns: repeat(4, minmax(calc(25% - 3.2rem), 1fr));
        grid-column-gap: 1.6rem;
        padding: 0 1.6rem;
      `,
      colWebSiteLg: css`
        display: grid;
        grid-template-columns: repeat(12, minmax(calc(8.3333% - 19.2rem), 1fr));
        grid-column-gap: 1.6rem;
        padding: 0 17.6rem;
      `,
    },
  },
});
