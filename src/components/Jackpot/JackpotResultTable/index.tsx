import React from 'react'
import { useTranslation } from 'react-i18next'

import {STable, SThead, STbody, STr, STh, STd} from './styled'

import { Last } from '~Common/interfaces/Jackpot'
import { formatCurrency, int2roman } from './utils'

interface JackpotResultTableProps {
  jackpotResults: Last
}

const JackpotResultTable = ({jackpotResults}: JackpotResultTableProps) => {

  const { t } = useTranslation()

  const tableRows = Object.keys(jackpotResults.odds).map((key: any, index: number) => (
    <STr key={`${key}-${+index}`}>
      <STd>{int2roman(index)}</STd>
      <STd>{t(`EuroJackpot.Table.Match.${index}`)}</STd>
      <STd>{`${jackpotResults.odds[key].winners}x`}</STd>
      <STd>{`${t(`Common.Currency`)}${formatCurrency(jackpotResults.odds[key].prize)}`}</STd>
    </STr>
  ));

  return (
    <STable>
      <SThead>
        <STr>
          <STh>{t('EuroJackpot.Table.Headers.Tier')}</STh>
          <STh>{t('EuroJackpot.Table.Headers.Match')}</STh>
          <STh>{t('EuroJackpot.Table.Headers.Winners')}</STh>
          <STh>{t('EuroJackpot.Table.Headers.Amount')}</STh>
        </STr>
      </SThead>
      <STbody>
        {
          // Slice is for not showing Rank 0
          tableRows.slice(1)
        }
      </STbody>
    </STable>
  )
}

export default JackpotResultTable
