import React from 'react'
import { useTranslation } from 'react-i18next'
import classnames from 'classnames'
import moment from 'moment'
import { useHistory, useParams } from 'react-router-dom'

// Styled components
import { BackLink, Container, H1, H2, Header } from './styled'

// Local imports
import JackpotDatepicker from '~Components/Jackpot/JackpotDatepicker'
import JackpotResults from '~Components/Jackpot/JackpotResults'
import { Loading } from '~Components/Common/Loading'
// Custom hooks
import { useJackpotDraw } from '~Hooks/useJackpotDraw'

interface ParamTypes {
  drawndate: string
}

const EuroJackpotScreen = () => {
  const { t } = useTranslation()
  const { drawndate } = useParams<ParamTypes>()
  const history = useHistory()

  const {jackpotResults, showLoading, error} = useJackpotDraw(drawndate)

  const dayChange = (day: Date) => {
    const formatedDate = moment(day).format('DD-MM-YYYY')
    history.push(`/eurojackpot/${formatedDate}`)
  }

  return (
    <Container className="container">
      <Header className={classnames('row', 'no-gutters')}>
        <H1 className={classnames('col-xs-12', 'col-md-auto')}>
          {t('EuroJackpot.Title')}
        </H1>
        <JackpotDatepicker onChangeDay={dayChange}/>
      </Header>
      {showLoading && <Loading />}
      {!showLoading && !error && jackpotResults && (
        <JackpotResults jackpotResults={jackpotResults} />
      )}
      {!showLoading && error && !jackpotResults && (
        <>
          <H2>{error}</H2>
          <BackLink to="/">{t('EuroJackpot.Error.BackButton')}</BackLink>
        </>
      )}
    </Container>
  )
}

export default EuroJackpotScreen
