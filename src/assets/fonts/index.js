import { createGlobalStyle } from 'styled-components';

import DaxlineProThin from './DaxlinePro-Light.ttf';
import DaxlineProLight from './DaxlinePro-Light.ttf';
import DaxlineProRegular from './DaxlinePro-Light.ttf';
import DaxlineProMedium from './DaxlinePro-Light.ttf';
import DaxlineProBold from './DaxlinePro-Light.ttf';
import DaxlineProExtraBold from './DaxlinePro-Light.ttf';
import DaxlineProBlack from './DaxlinePro-Light.ttf';

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
