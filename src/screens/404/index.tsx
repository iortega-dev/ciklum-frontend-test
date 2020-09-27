import React from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import HomeLink from '~Components/Common/HomeLink'

const ScreenContainer = styled.div`
  height: calc(100vh - ${(props) => props.theme.spacing.header});
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const H1 = styled.h1`
  color: ${(props) => props.theme.colors.lottolandGreen};
  font-family: ${(props) => props.theme.fonts[0]};
  font-size: 6rem;
  font-weight: 600;
  display: block;
  margin: ${(props) => props.theme.spacing['1']};
`
const H2 = styled.h2`
  text-align: center;
  color: ${(props) => props.theme.colors.lottolandGreen};
  font-family: ${(props) => props.theme.fonts[0]};
  font-size: 3rem;
  font-weight: 400;
  display: block;
  margin: ${(props) => props.theme.spacing['1']};
`

const NotFoundScreen = () => {
  const { t } = useTranslation()
  return (
    <ScreenContainer className="container">
      <H1>{t('404.Title')}</H1>
      <H2>{t('404.Subtitle')}</H2>
      <HomeLink />
    </ScreenContainer>
  )
}

export default NotFoundScreen
