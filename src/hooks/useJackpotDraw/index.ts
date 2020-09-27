import { useState, useEffect } from 'react'
import moment from 'moment'
import { useTranslation } from 'react-i18next'
// Interfaces
import { Last } from '~Common/interfaces/Jackpot'
// Api
import { getEurojackpotResults } from '~Api'

/**
 * Custom hook to get a Eurojackpot Draw given a date or the last Draw 
 * @param dayOfDraw Optional - Date in format DD-MM-YYYY
 * @returns Object{jackpotResults, showLoading, error}
 */
export const useJackpotDraw = (dayOfDraw: string) => {
  const { t } = useTranslation()
  // Local state
  const [error, setError] = useState<string | undefined>(undefined)
  const [showLoading, setShowLoading] = useState(false)
  const [jackpotResults, setJackpotResults] = useState<Last | undefined>(
    undefined
  )

  // If a day is given, format it, otherwise stay undefined
  const dayToCheck = dayOfDraw
    ? moment(dayOfDraw, 'DD-MM-YYYY').format('YYYYMMDD')
    : undefined

  useEffect(() => {
    setShowLoading(true) // Show loader
    getEurojackpotResults(dayToCheck)
      .then(({ data }) => {
        if (Array.isArray(data.last) && data.last.length > 0) { // If a draw happened that day
          setError(undefined)
          setJackpotResults(data.last[0])
        } else if (Array.isArray(data.last) && data.last.length === 0) { // If there's no draw at given day
          setError(t('EuroJackpot.Error.Messages.NoResultsDay'))
          setJackpotResults(undefined)
        } else { // The result of last draw
          setError(undefined)
          setJackpotResults(data.last as Last)
        }
      })
      .catch((error) => {
        if (error.response) { // If there's a controlled exception
          setError(t('EuroJackpot.Error.Messages.ControlledError'))
        } else if (error.request) { // Is there's an uncontrolled exception (probably connection)
          setError(t('EuroJackpot.Error.Messages.UncontrolledError'))
        }
      })
      .finally(() => setShowLoading(false))
  }, [t, dayToCheck])

  return { jackpotResults, showLoading, error }
}
