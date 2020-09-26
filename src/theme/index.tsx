import React, { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    textPrimary: "#012406",
    textSecondary: "#815422",
    lottolandGreen: "#64a407",
    borderGrey: "#d9deda",
    borderBrown: "#ca7f26"
  },
  fonts: ["DaxlinePro"],
  fontSizes: {
    regular: "14px",
    medium: "17px",
    large: "21px"
  }
};

type ThemeProps = {
  children: ReactNode
}

const Theme = ({ children }: ThemeProps) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;