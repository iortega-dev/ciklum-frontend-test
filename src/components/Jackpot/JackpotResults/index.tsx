import React from 'react'
import { useTranslation } from 'react-i18next'
import moment from 'moment'

import { Header, Span, Section, BallsContainer } from './styled'

import { Last } from '~Common/interfaces/Jackpot'

import JackpotResultBalls from '~Components/Jackpot/JackpotResultBalls'
import JackpotResultTable from '~Components/Jackpot/JackpotResultTable'

interface JackpotResultsProps {
  jackpotResults: Last
}

const JackpotResults = ({ jackpotResults }: JackpotResultsProps) => {
  const { t } = useTranslation()
  const { day, month, year } = jackpotResults.date

  const minTwoDigits = (n: number) => {
    return (n < 10 ? '0' : '') + n
  }

  const naturalDay = () => {
    const momentDate = moment(`${minTwoDigits(day)}${minTwoDigits(month)}${year}`, 'DDMMYYYY')
    return momentDate.format('dddd DD MMMM YYYY')
  }

  return (
    <Section>
      <Header>
        <Span>
          {t('EuroJackpot.DayResults', { day: naturalDay() })}
        </Span>
        <BallsContainer>
          <JackpotResultBalls
            numbers={jackpotResults.numbers}
            euroNumbers={jackpotResults.euroNumbers}
          />
        </BallsContainer>
        <JackpotResultTable jackpotResults={jackpotResults} />
      </Header>
    </Section>
  )
}

export default JackpotResults
