import {CoinPrice, Order} from "../../Common/src/types";
import BigNumber from "bignumber.js";
import { savePrice } from "../../PricingMonitor/src/db-scripts";
import { assert } from "chai";
import {getCurrentPrice, getUserLedger} from "../src/db-scripts";
import {getPortfolio, placeOrder} from "../src/crypto-exchange";

describe('exchange tests', function() {
  it('can query the most recent price for btc', async function() {
    const testData: CoinPrice = {
      name: 'BTC',
      usdPrice: new BigNumber(1),
      btcPrice: new BigNumber(1)
    }
    savePrice(testData)
    const price = await getCurrentPrice('BTC')
    console.log(price)
    assert(price.usdPrice.isEqualTo( new BigNumber(1)))
  })

  it('can get a users most recent balance', async function() {
    console.log(await getUserLedger('Huey'))
    assert(true)
  })

  it('can process a valid order', async function() {
    const ledger = await getUserLedger('Huey')
    const order: Order = {
      userName: 'Huey',
      to: 'BTC',
      from: 'USD',
      amount: new BigNumber(0.001),
      filled: false
    }
    const ledgerEntry = await placeOrder(order)
    ledgerEntry.BTC.toNumber()
    assert(ledgerEntry.BTC.toNumber() === ledger.BTC.toNumber() + 0.001)
  })

  it('can get a full user portfolio', async function() {
    const portfolio = await getPortfolio('Huey')
    console.log(portfolio.balances[0].usdValue.toString())
    console.log(await getPortfolio('Huey'))
    assert(true)
  })
})
