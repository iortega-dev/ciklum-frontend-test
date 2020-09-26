export interface LastDate {
  full: string
  day: number
  month: number
  year: number
  hour: number
  minute: number
  dayOfWeek: string
}

export interface Rank {
  winners: number
  specialPrize: number
  prize: number
}

export interface Last {
  nr: number
  currency: string
  date: LastDate
  closingDate: string
  lateClosingDate: string
  drawingDate: string
  numbers: number[]
  euroNumbers: number[]
  jackpot: string
  marketingJackpot: string
  specialMarketingJackpot: string
  climbedSince: number
  Winners: number
  odds: Rank[]
}

export interface NextDate {
  full: string
  day: number
  month: number
  year: number
  hour: number
  minute: number
  dayOfWeek: string
}

export interface Next {
  nr: number
  currency: string
  date: NextDate
  closingDate: string
  lateClosingDate: string
  drawingDate: string
  jackpot: string
  marketingJackpot: string
  specialMarketingJackpot: string
  climbedSince: number
}

export interface Eurojackpot {
  last: Last | Last[]
  next?: Next
}
