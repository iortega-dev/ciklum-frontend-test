import React from 'react'

// Styled components
import { Li, Ul } from './styled'

type JRBProps = {
  numbers: number[]
  euroNumbers: number[]
}

const JackpotResultBalls = ({ numbers, euroNumbers }: JRBProps) => {
  const listNumbers = numbers.map((number, index) => (
    <Li key={`${number}-${+index}`}>{number}</Li>
  ))

  const listEuroNumbers = euroNumbers.map((number, index) => (
    <Li color="brown" key={`${number}-${+index}`}>{number}</Li>
  ))

  return (
    <Ul>
      {listNumbers}
      {listEuroNumbers}
    </Ul>
  )
}

export default JackpotResultBalls
