import { AxiosPromise } from "axios"
import { Eurojackpot } from "~Common/interfaces/Jackpot"
import { client } from "./_AxiosClient"

/**
 * Get Eurojackpot results of any given day, if no day is given
 * it will return the last one.
 * 
 * @param dayOfDraw Optional {format: yyyymmdd} day to get Eurojackpot results  
 */
export const getEurojackpotResults = (dayOfDraw?: string): AxiosPromise<Eurojackpot> => {
  return client.get(dayOfDraw ? `drawings/euroJackpot/${dayOfDraw}` : 'drawings/euroJackpot')
}