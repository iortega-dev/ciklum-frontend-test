import styled from 'styled-components'

export const Container = styled.div``

export const Header = styled.header`
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.colors.borderGrey};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: ${(props) => props.theme.spacing[3]};
  padding-bottom: ${(props) => props.theme.spacing[2]};
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

export const PickersContainer = styled.div`
  select {
    margin-bottom: ${(props) => props.theme.spacing[1]};
    margin-left: 0;
    margin-right: 0;
  }
  @media (${(props) => props.theme.breakpoints.sm}) {
    select {
      margin-bottom: 0;
      margin-left: ${(props) => props.theme.spacing[1]};
    }
  }
`

export const Select = styled.select`
  border-color: ${(props) => props.theme.colors.borderGrey};
  border-radius: 3px;
  color: ${(props) => props.theme.colors.textPrimary};
  font-family: ${(props) => props.theme.fonts[0]};
  font-size: ${(props) => props.theme.fontSizes.medium};
  font-weight: 300;
  padding: ${(props) => props.theme.spacing['0.5']};
`
