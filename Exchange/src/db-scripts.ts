import {CoinName, CoinPrice, LedgerEntry} from "../../Common/src/types"
import BigNumber from "bignumber.js";
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

export async function getUserLedger(userName: String): Promise<LedgerEntry> {
  const balance = await knex('ledger')
    .select('usd', 'btc', 'doge', 'ltc', 'xmr', 'created', 'user_id', 'users.id', 'users.name')
    .join('users', 'users.id', 'ledger.user_id')
    .where('users.name', userName)
    .orderBy('created', 'desc')
  return {
    userName: balance[0].name,
    USD: new BigNumber(balance[0].usd),
    BTC: new BigNumber(balance[0].btc),
    DOGE: new BigNumber(balance[0].doge),
    LTC: new BigNumber(balance[0].ltc),
    XMR: new BigNumber(balance[0].xmr),
    created: balance[0].created
  }
}

export async function saveLedgerEntry(ledger: LedgerEntry) {
  const userId = await knex('ledger')
    .select('id')
    .where('userName', ledger.userName)

  knex('ledger')
    .insert(
      {
        user_id: userId,
        usd: ledger.USD,
        btc: ledger.BTC,
        doge: ledger.DOGE,
        ltc: ledger.LTC,
        xmr: ledger.XMR
      }
    )
}
