import React from 'react'
import { useTranslation } from 'react-i18next'
import moment from 'moment'
// Styled components
import { Header, Span, Section, BallsContainer } from './styled'
// Interfaces
import { Last } from '~Common/interfaces/Jackpot'
// Components
import JackpotResultBalls from '~Components/Jackpot/JackpotResultBalls'
import JackpotResultTable from '~Components/Jackpot/JackpotResultTable'

interface JackpotResultsProps {
  jackpotResults: Last
}

const JackpotResults = ({ jackpotResults }: JackpotResultsProps) => {
  const { t } = useTranslation()
  const { day, month, year } = jackpotResults.date

  /**
   * Given a number, if it's less than 10, adds 0 to it
   * @param n number
   */
  const minTwoDigits = (n: number) => {
    return (n < 10 ? '0' : '') + n
  }

  /**
   * Translates JackpotResults.Date to natural language date
   */
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
