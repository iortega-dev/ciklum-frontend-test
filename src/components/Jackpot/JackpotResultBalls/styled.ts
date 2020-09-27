/* eslint-disable @typescript-eslint/no-unsafe-return */
import styled from 'styled-components'

export const Ul = styled.ul`
  color: ${(props) => props.theme.colors.textPrimary};
  font-family: ${(props) => props.theme.fonts[0]};
  list-style: none;
  margin: 0;
  padding: 0;
`

export const Li = styled.li`
  align-items: center;
  border-radius: 50%;
  border: 1px solid ${(props): any => props.color ? props.theme.colors.borderBrown : props.theme.colors.borderGrey};
  display: inline-flex;
  font-size: ${(props) => props.theme.fontSizes.medium};
  height: 35px;
  justify-content: center;
  margin-bottom: ${(props) => props.theme.spacing['1']};
  margin-right: ${(props) => props.theme.spacing['1']};
  width: 35px;

`
