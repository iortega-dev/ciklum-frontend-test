import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import classnames from 'classnames'

import { Container, H1, Header } from './styled'

import { Last } from '~Common/interfaces/Jackpot'

import JackpotDatepicker from '~Components/JackpotDatepicker'
import JackpotResults from '~Components/JackpotResults'
import { Loading } from '~Components/Loading'

import { getEurojackpotResults } from '~Api'

const HomeScreen = () => {
  const { t } = useTranslation()

  const [error, setError] = useState(null)
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
        setError(error)
      })
      .finally(() => setShowLoading(false))
  }, [])

  return (
    <Container className="container">
      <Header className={classnames('row', 'no-gutters')}>
        <H1 className={classnames('col-xs-12', 'col-md-auto')}>
          {t('EuroJackpot.Title')}
        </H1>
        <JackpotDatepicker />
      </Header>
      {showLoading && <Loading />}
      {!showLoading && !error &&  jackpotResults && (
        <JackpotResults jackpotResults={jackpotResults} />
      )}
    </Container>
  )
}

export default HomeScreen
