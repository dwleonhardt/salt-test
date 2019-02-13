import {CoinName, CoinPrice, LedgerEntry} from "../../Common/src/types"
import BigNumber from "bignumber.js";
import {fromSatoshi, toSatoshi} from "../../Common/src/conversions";
const knex = require('../../knex')

export async function getCurrentPrice(coinName: CoinName): Promise<CoinPrice> {
  const coinPrice = await knex('price')
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

export async function getCurrentPrices(): Promise<Array<CoinPrice>> {
  const coinPrices = await knex('price')
    .select('*')
    .orderBy('created', 'desc')
    .limit(4)

  return coinPrices.map((price: any) => {
    return {
      name: price.name,
      usdPrice: new BigNumber(price.price_usd),
      btcPrice: new BigNumber(price.price_btc)
    }
  })
}

export async function getUserLedger(userName: String): Promise<LedgerEntry> {
  const balance = await knex('ledger')
    .select('usd', 'btc', 'doge', 'ltc', 'xmr', 'created', 'user_id', 'users.id', 'users.name')
    .join('users', 'users.id', 'ledger.user_id')
    .where('users.name', userName)
    .orderBy('created', 'desc')
  return {
    userName: balance[0].name,
    USD: new BigNumber(balance[0].usd),
    BTC: fromSatoshi(balance[0].btc),
    DOGE: fromSatoshi(balance[0].doge),
    LTC: fromSatoshi(balance[0].ltc),
    XMR: fromSatoshi(balance[0].xmr),
    created: balance[0].created
  }
}

export async function saveLedgerEntry(ledger: LedgerEntry) {
  console.log(ledger)
  const userId = await knex('users')
    .select('id')
    .where('name', ledger.userName)
  const newLedger = await knex('ledger')
    .insert(
      {
        user_id: userId[0].id,
        usd: parseFloat(ledger.USD.toString()).toFixed(2),
        btc: toSatoshi(ledger.BTC),
        doge: toSatoshi(ledger.DOGE),
        ltc: toSatoshi(ledger.LTC),
        xmr: toSatoshi(ledger.XMR)
      }
    )
    .returning('*')
  return newLedger
}
