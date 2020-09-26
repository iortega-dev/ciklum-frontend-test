import React from 'react'
import { useTranslation } from 'react-i18next'

import { Header, Span, Section, BallsContainer } from './styled'

import JackpotResultBalls from '~Components/JackpotResultBalls'

const JackpotResults = () => {

  const { t } = useTranslation()

  return (
    <Section>
      <Header>
        <Span>{t('EuroJackpot.DayResults',{ day: 'Friday 25 Sep 2020'})}</Span>
        <BallsContainer>
          <JackpotResultBalls numbers={[1,7,9,29,46]} euroNumbers={[9,10]}/>
        </BallsContainer>
      </Header>
    </Section>
  )
}

export default JackpotResults
