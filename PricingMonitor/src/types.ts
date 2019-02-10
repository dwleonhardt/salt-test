import { BigNumber } from 'bignumber.js'

export type CoinName = 'BTC' | 'LTC' | 'DOGE' | 'XMR'

export interface CoinPrice {
  name: CoinName,
  usdPrice: BigNumber
  btcPrice: BigNumber
}

export interface MonitorSettings {
  enabled: boolean,
  timeout: number
}