import React from 'react'
import { useTranslation } from 'react-i18next'

import { Header, Span, Section, BallsContainer } from './styled'

import { Last } from '~Common/interfaces/Jackpot'

import JackpotResultBalls from '~Components/Jackpot/JackpotResultBalls'
import JackpotResultTable from '~Components/Jackpot/JackpotResultTable'

interface JackpotResultsProps {
  jackpotResults: Last
}

const JackpotResults = ({jackpotResults}: JackpotResultsProps) => {

  const { t } = useTranslation()

  return (
    <Section>
      <Header>
        <Span>{t('EuroJackpot.DayResults',{ day: 'Friday 25 Sep 2020'})}</Span>
        <BallsContainer>
          <JackpotResultBalls numbers={jackpotResults.numbers} euroNumbers={jackpotResults.euroNumbers}/>
        </BallsContainer>
        <JackpotResultTable jackpotResults={jackpotResults}/>
      </Header>
    </Section>
  )
}

export default JackpotResults
