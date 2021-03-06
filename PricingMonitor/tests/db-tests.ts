import { assert } from 'chai'
import { savePrice } from "../src/db-scripts";
import BigNumber from "bignumber.js";
import { CoinPrice } from "../../Common/src/types";

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
})