import {CoinName, CoinPrice} from "./types";
import BigNumber from "bignumber.js";
const knex = require('../knex')

export function savePrice(coinData: CoinPrice) {
  knex('currency')
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
