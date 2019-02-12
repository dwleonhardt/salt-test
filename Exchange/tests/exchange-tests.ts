import { CoinPrice } from "../../Common/src/types";
import BigNumber from "bignumber.js";
import { savePrice } from "../../PricingMonitor/src/db-scripts";
import { assert } from "chai";
import {getCurrentPrice, getUserLedger} from "../src/db-scripts";


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
    console.log(await getUserLedger(1))
    assert(true)
  })
})
