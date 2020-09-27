/* eslint-disable @typescript-eslint/no-unsafe-return */
import styled from "styled-components";

export const Section = styled.section``

export const Header = styled.header``

export const Span = styled.span`
  display: block;
  padding: ${(props) => props.theme.spacing['2']} 0px;
  color: ${(props) => props.theme.colors.textPrimary};
  font-family: ${(props) => props.theme.fonts[0]};
  font-size: ${(props) => props.theme.fontSizes.medium};
  font-weight: 300;
`

export const BallsContainer = styled.div`
  margin-bottom: ${(props) => props.theme.spacing['1']};
`