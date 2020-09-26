import React from 'react'
import { useTranslation } from 'react-i18next'
import classnames from 'classnames'

import { Container, H1, Header, PickersContainer, Select } from './styled'

const HomeScreen = () => {
  const { t } = useTranslation()
  return (
    <Container className="container">
      <Header className="row">
        <H1 className={classnames('col-xs-12', 'col-md-auto')}>
          {t('EuroJackpot.Title')}
        </H1>
        <PickersContainer
          className={classnames(
            'row',
            'no-gutters',
            'col-xs-12',
            'col-md-auto',
            'justify-content-around'
          )}
        >
          <Select
            className={classnames('col-xs-12', 'col-sm-5', 'col-md-auto')}
            name="date-datepicker"
            id="date-datepicker"
          >
            <option>Fri 25 Sep</option>
          </Select>
          <Select
            className={classnames('col-xs-12', 'col-sm-5', 'col-md-auto')}
            name="year-datepicker"
            id="year-datepicker"
          >
            <option>2020</option>
          </Select>
        </PickersContainer>
      </Header>
    </Container>
  )
}

export default HomeScreen
