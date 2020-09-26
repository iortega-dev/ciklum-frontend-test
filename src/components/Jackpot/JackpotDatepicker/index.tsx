import React from 'react'
import classnames from 'classnames'

import { PickersContainer, Select } from './styled'

const JackpotDatepicker = () => {
  return (
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
  )
}

export default JackpotDatepicker
