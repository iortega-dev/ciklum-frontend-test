import React, { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    textPrimary: "#012406",
    textSecondary: "#815422",
    lottolandGreen: "#64a407",
    borderGrey: "#d9deda",
    borderBrown: "#ca7f26",
    borderDarkGrey: "#9c9c9c",
    white: "#fff"
  },
  fonts: ["DaxlinePro"],
  fontSizes: {
    regular: "14px",
    medium: "17px",
    large: "21px"
  },
  spacing:  {
    0: '0',
    '0.5': '4px',
    1: '8px',
    2: '16px',
    3: '24px',
    4: '32px',
    5: '40px',
    6: '48px',
    7: '56px',
    8: '64px',
    9: '72px',
    10: '80px',
    header: '70px'
  },
  breakpoints: {
    xs: 'min-width: 0px',
    sm: 'min-width: 576px',
    md: 'min-width: 768px',
    lg: 'min-width: 992px',
    xl: 'min-width: 1200px',
  }
};

type ThemeProps = {
  children: ReactNode
}

const Theme = ({ children }: ThemeProps) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;