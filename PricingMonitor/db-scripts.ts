import { CoinPrice } from "./types";
const knex = require('../knex')

export function savePrice(coinData: CoinPrice) {
  knex('currency')
    .insert({
      name: coinData.name,
      price_usd: coinData.usdPrice.toNumber(),
      price_btc: coinData.btcPrice.toNumber()
    })
    .then((data: any) => {
      console.log(data);
    })
}
