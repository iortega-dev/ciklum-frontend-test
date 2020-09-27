import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div``

export const Header = styled.header`
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.colors.borderGrey};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: ${(props) => props.theme.spacing[3]};
  padding-bottom: ${(props) => props.theme.spacing[2]};
  padding-top: 0;
  @media (${(props) => props.theme.breakpoints.md}) {
    padding-top: ${(props) => props.theme.spacing[2]};
  }
`

export const H1 = styled.h1`
  color: ${(props) => props.theme.colors.textPrimary};
  font-family: ${(props) => props.theme.fonts[0]};
  font-size: ${(props) => props.theme.fontSizes.large};
  font-weight: 900;
  margin-bottom: ${(props) => props.theme.spacing[1]};
  margin-top: ${(props) => props.theme.spacing[2]};
  text-align: center;
  @media (${(props) => props.theme.breakpoints.md}) {
    text-align: left;
  }
`

export const H2 = styled.h2`
  font-family: ${(props) => props.theme.fonts[0]};
  font-weight: 800;
`
