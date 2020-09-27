import React from 'react'
import { useTranslation } from 'react-i18next'
import classnames from 'classnames'
import moment from 'moment'
import { useHistory, useParams } from 'react-router-dom'

// Styled components
import { Container, H1, H2, Header } from './styled'

// Local imports
import JackpotDatepicker from '~Components/Jackpot/JackpotDatepicker'
import JackpotResults from '~Components/Jackpot/JackpotResults'
import { Loading } from '~Components/Common/Loading'
import HomeLink from '~Components/Common/HomeLink'
// Custom hooks
import { useJackpotDraw } from '~Hooks/useJackpotDraw'

interface ParamTypes {
  drawndate: string
}

const EuroJackpotScreen = () => {
  // Hooks
  const { t } = useTranslation()
  const { drawndate } = useParams<ParamTypes>()
  const history = useHistory()
  // Custom Hooks
  const {jackpotResults, showLoading, error} = useJackpotDraw(drawndate)

  /**
   * Function triggered when a date is selected and redirects to it's corresponding page
   * @param day Date - Selected date
   */
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
        <div className={classnames('d-flex', 'flex-column', 'align-items-center')}>
          <H2>{error}</H2>
          <HomeLink />
        </div>
      )}
    </Container>
  )
}

export default EuroJackpotScreen
