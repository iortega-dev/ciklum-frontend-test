import styled from 'styled-components'

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

export const Wrapper = styled.div`
  .DayPickerInput {
    width: 100%;
  }
  .form-control {
    text-align: center;
    width: 100%;
    border-color: ${(props) => props.theme.colors.borderGrey};
    border-radius: 3px;
    color: ${(props) => props.theme.colors.textPrimary};
    font-family: ${(props) => props.theme.fonts[0]};
    font-size: ${(props) => props.theme.fontSizes.medium};
    font-weight: 300;
    padding: ${(props) => props.theme.spacing['0.5']};
    &:focus {
      outline-color: ${(props) => props.theme.colors.lottolandGreen};
    }
  }
  .DayPickerInput-OverlayWrapper {
    width: 100%;
    
    @media (${(props) => props.theme.breakpoints.md}) {
      margin-left: -65px;
    }
  }
`
