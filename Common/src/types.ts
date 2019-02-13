import { BigNumber } from 'bignumber.js'

export type CoinName = 'BTC' | 'LTC' | 'DOGE' | 'XMR' | 'USD'

export interface CoinPrice {
  name: CoinName,
  usdPrice: BigNumber
  btcPrice: BigNumber
}

export interface MonitorSettings {
  enabled: boolean,
  timeout: number
}

export interface LedgerEntry {
  userName: string,
  USD: BigNumber,
  BTC: BigNumber,
  DOGE: BigNumber,
  LTC: BigNumber,
  XMR: BigNumber,
  created: Date
}

export interface Order {
  userName: string,
  to: CoinName,
  from: CoinName,
  amount: BigNumber,
  filled: boolean
}

export interface OrderPrice {
  name: CoinName,
  price: BigNumber
}

export interface PortfolioValue {
  currency: CoinName,
  usdValue: BigNumber
}

export interface Portfolio {
  userName: string,
  balances: Array<PortfolioValue>
}
