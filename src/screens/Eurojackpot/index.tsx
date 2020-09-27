import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import classnames from 'classnames'
import moment from 'moment'

import { Container, H1, Header } from './styled'

import { Last } from '~Common/interfaces/Jackpot'

import JackpotDatepicker from '~Components/Jackpot/JackpotDatepicker'
import JackpotResults from '~Components/Jackpot/JackpotResults'
import { Loading } from '~Components/Common/Loading'

import { getEurojackpotResults } from '~Api'

const EuroJackpotScreen = () => {
  const { t } = useTranslation()

  const [error, setError] = useState<string | undefined>(undefined)
  const [showLoading, setShowLoading] = useState(false)
  const [jackpotResults, setJackpotResults] = useState<Last | undefined>(undefined)

  useEffect(() => {
    setShowLoading(true)
    getEurojackpotResults()
      .then(({ data }) => {
        if (Array.isArray(data.last) && data.last.length) {
          setJackpotResults(data.last[0])
        } else {
          setJackpotResults(data.last as Last)
        }
      })
      .catch((error) => {
        if (error.response) {
          setError("Sorry, there was an error while trying to retrieve the results.");
        } else if (error.request) {
          setError("Sorry, there was an error while connecting to the server.")
        }
      })
      .finally(() => setShowLoading(false))
  }, [])

  const dayChange = (day: Date) => {
    console.log("dayChange -> day", moment(day))
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
        <h1>{error}</h1>
      )}
    </Container>
  )
}

export default EuroJackpotScreen
