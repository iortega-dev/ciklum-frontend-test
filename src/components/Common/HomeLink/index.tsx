import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const SLink = styled(Link)`
  display: inline-block;
  margin-top: ${(props) => props.theme.spacing[1]};
  border-radius: 4px;
  padding: ${(props) => props.theme.spacing[1]} ${(props) => props.theme.spacing[2]};
  background: ${(props) => props.theme.colors.lottolandGreen};
  color: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.fonts[0]};
  font-weight: 400;
  text-decoration: none;
`

const HomeLink = () => {
  const { t } = useTranslation()
  return <SLink to="/">{t('Common.HomeButton')}</SLink>
}

export default HomeLink
