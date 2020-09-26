import { createGlobalStyle } from 'styled-components';

import DaxlineProThin from './DaxlinePro-Thin.ttf';
import DaxlineProLight from './DaxlinePro-Light.ttf';
import DaxlineProRegular from './DaxlinePro-Regular.ttf';
import DaxlineProMedium from './DaxlinePro-Medium.ttf';
import DaxlineProBold from './DaxlinePro-Bold.ttf';
import DaxlineProExtraBold from './DaxlinePro-ExtraBold.ttf';
import DaxlineProBlack from './DaxlinePro-Black.ttf';

export const Typography = createGlobalStyle`
    @font-face {
        font-family:"DaxlinePro";
        src: url(${DaxlineProThin}) format("truetype");
        font-weight:100;
        font-style:normal;
    }
    @font-face {
        font-family:"DaxlinePro";
        src: url(${DaxlineProLight}) format("truetype");
        font-weight:200;
        font-style:normal;
    }
    @font-face {
        font-family:"DaxlinePro";
        src: url(${DaxlineProRegular}) format("truetype");
        font-weight: 400;
        font-style:normal;
    }
    @font-face {
        font-family:"DaxlinePro";
        src: url(${DaxlineProMedium}) format("truetype");
        font-weight:500;
        font-style:normal;
    }
    @font-face {
        font-family:"DaxlinePro";
        src: url(${DaxlineProBold}) format("truetype");
        font-weight:700;
        font-style:normal;
    }
    @font-face {
        font-family:"DaxlinePro";
        src: url(${DaxlineProExtraBold}) format("truetype");
        font-weight:800;
        font-style:normal;
    }
    @font-face {
        font-family:"DaxlinePro";
        src: url(${DaxlineProBlack}) format("truetype");
        font-weight:900;
        font-style:normal;
    }
`;
