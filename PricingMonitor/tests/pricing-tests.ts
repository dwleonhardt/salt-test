import { assert } from 'chai'
import {getApiPrice} from "../src/cc-api";
import {pricingMonitor} from "../src/pricing-monitor";

describe('pricing monitor http tests', function() {
  it('can get bitcoin pricing data', async function() {
    const btcData = await getApiPrice('BTC')
    assert(typeof btcData.usdPrice.toNumber() === "number")
    assert(typeof btcData.btcPrice.toNumber() === "number")
  })

  it('can get liteCoin pricing data', async function() {
    const ltcData = await getApiPrice('LTC')
    assert(typeof ltcData.usdPrice.toNumber() === "number")
    assert(typeof ltcData.btcPrice.toNumber() === "number")
  })

  it('can get doge pricing data', async function() {
    const dogeData = await getApiPrice('DOGE')
    assert(typeof dogeData.usdPrice.toNumber() === "number")
    assert(typeof dogeData.btcPrice.toNumber() === "number")
  })

  it('can get monero pricing data', async function() {
    const moneroData = await getApiPrice('XMR')
    assert(typeof moneroData.usdPrice.toNumber() === "number")
    assert(typeof moneroData.btcPrice.toNumber() === "number")
  })

  it('can poll an api for pricing data', async function() {
    console.log(await pricingMonitor())
    assert(true)
  })
})