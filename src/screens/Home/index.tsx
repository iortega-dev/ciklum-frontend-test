import React from 'react'
import { useTranslation } from 'react-i18next'
import classnames from 'classnames'

import { Container, H1, Header } from './styled'

import JackpotDatepicker from '~Components/JackpotDatepicker'
import JackpotResults from '~Components/JackpotResults'

const HomeScreen = () => {
  const { t } = useTranslation()
  return (
    <Container className="container">
      <Header className={classnames('row', 'no-gutters')}>
        <H1 className={classnames('col-xs-12', 'col-md-auto')}>
          {t('EuroJackpot.Title')}
        </H1>
        <JackpotDatepicker />
      </Header>
      <JackpotResults />
    </Container>
  )
}

export default HomeScreen
