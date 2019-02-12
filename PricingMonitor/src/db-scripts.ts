import { CoinPrice, MonitorSettings } from "../../Common/src/types";
const knex = require('../../knex')

export function savePrices(coinData: Array<CoinPrice>) {
  coinData.forEach(data => savePrice(data))
}

export async function savePrice(coinData: CoinPrice) {
  await knex('price')
    .insert({
      name: coinData.name,
      price_usd: coinData.usdPrice.toNumber(),
      price_btc: coinData.btcPrice.toNumber()
    })
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
