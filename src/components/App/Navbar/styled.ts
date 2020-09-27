import styled from "styled-components"

export const Section = styled.section`
  width: 100%;
  position: fixed;
  background: ${(props) => props.theme.colors.white};
  z-index: 1;
  border-bottom: 1px solid ${(props) => props.theme.colors.borderGrey};
`

export const Header = styled.header`
  padding-top: ${(props) => props.theme.spacing[1]};
  padding-bottom: ${(props) => props.theme.spacing[1]};
`

export const Img = styled.img`
  width: auto;
  height: 54px;
  display: block;
  padding-top: ${(props) => props.theme.spacing[1]};
  padding-bottom: ${(props) => props.theme.spacing[1]};
`