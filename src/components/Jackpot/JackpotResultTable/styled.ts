import {Table, Thead, Tbody, Tr, Th, Td} from 'react-super-responsive-table'
import styled from 'styled-components'

export const STable = styled(Table)`
  &.responsiveTable tbody tr {
    border: none;
  }
`

export const SThead = styled(Thead)`
  border: 1px solid ${(props) => props.theme.colors.borderGrey};

`

export const STbody = styled(Tbody)`

`

export const STr = styled(Tr)`
  box-shadow: 0px 0px 2px 0px ${(props) => props.theme.colors.borderDarkGrey};
`

export const STh = styled(Th)`
  padding: ${(props) => props.theme.spacing['2']} ${(props) => props.theme.spacing['3']};
  text-align: left;
  font-family: ${(props) => props.theme.fonts[0]};
  font-weight: 500;
`

export const STd = styled(Td)`
padding: ${(props) => props.theme.spacing['2']} ${(props) => props.theme.spacing['3']};
  text-align: left;
  font-family: ${(props) => props.theme.fonts[0]};
  font-weight: 200;

`