import {CoinName, CoinPrice, MonitorSettings} from "./types";
import BigNumber from "bignumber.js";
const knex = require('../../knex')

export function savePrices(coinData: Array<CoinPrice>) {
  coinData.forEach(data => savePrice(data))
}

export async function savePrice(coinData: CoinPrice) {
  await knex('currency')
    .insert({
      name: coinData.name,
      price_usd: coinData.usdPrice.toNumber(),
      price_btc: coinData.btcPrice.toNumber()
    })
}

export async function getCurrentPrice(coinName: CoinName): Promise<CoinPrice> {
  const coinPrice = await knex('currency')
    .select('*')
    .where('name', coinName)
    .orderBy('created', 'desc')
    .limit(1)

  return {
    name: coinPrice[0].name,
    usdPrice: new BigNumber(coinPrice[0].price_usd),
    btcPrice: new BigNumber(coinPrice[0].price_btc)
  }
}

export async function getMonitorSettings(): Promise<MonitorSettings> {
  const settings = await knex('monitor')
    .select('*')
    .limit(1)
  return {
    enabled: settings[0].enabled,
    timeout: settings[0].timeout
  }
}
