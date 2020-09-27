import React from 'react'
import classnames from 'classnames'
import moment from 'moment'
import MomentLocaleUtils from 'react-day-picker/moment'
// English locale for moment calendar
import 'moment/locale/en-gb'
// Daypicker input component
import DayPickerInput from 'react-day-picker/DayPickerInput'
// Styled components
import { Wrapper, PickersContainer} from './styled'

// Props
interface JackpotDatepickerProps {
  onChangeDay: (day: Date) => void
}

const JackpotDatepicker = ({onChangeDay}: JackpotDatepickerProps) => {
  const { formatDate, parseDate } = MomentLocaleUtils

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
      <Wrapper className={classnames('col-xs-12', 'col-sm-5', 'col-md-auto')}>
        <DayPickerInput
          inputProps={{ className: 'form-control', readOnly: true }}
          formatDate={formatDate}
          parseDate={parseDate}
          onDayChange={onChangeDay}
          format="LL"
          placeholder={`${formatDate(new Date(), 'DD MMMM YYYY', 'en')}`}
          dayPickerProps={{
            locale: 'en-gb',
            localeUtils: MomentLocaleUtils,
          }}
        />
      </Wrapper>
    </PickersContainer>
  )
}

export default JackpotDatepicker
