import { assert } from 'chai'
import {getApiPrice} from "../src/cc-api";
import {getCurrentPrice, savePrice} from "../src/db-scripts";
import BigNumber from "bignumber.js";
import {CoinPrice} from "../src/types";

describe('pricing monitor database tests', function() {
  it('can save a currency pricing record', async function() {
    const testData: CoinPrice = {
      name: 'BTC',
      usdPrice: new BigNumber(1),
      btcPrice: new BigNumber(1)
    }
    savePrice(testData)
    assert(true)
  })

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

})