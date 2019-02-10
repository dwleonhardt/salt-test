import { assert } from 'chai'
import {getApiPrice} from "../cc-api";

describe('pricing monitor http tests', function() {
  it('can get bitcoin pricing data', async function() {
    const btcData = await getApiPrice('BTC')
    console.log('btcPrice:', btcData.usdPrice.toNumber())
    assert(typeof btcData.usdPrice.toNumber() === "number")
    assert(typeof btcData.btcPrice.toNumber() === "number")
  })

  it('can get liteCoin pricing data', async function() {
    const ltcData = await getApiPrice('LTC')
    console.log('ltcPrice:', ltcData.usdPrice.toNumber())
    assert(typeof ltcData.usdPrice.toNumber() === "number")
    assert(typeof ltcData.btcPrice.toNumber() === "number")
  })

  it('can get doge pricing data', async function() {
    const dogeData = await getApiPrice('DOGE')
    console.log('dogePrice:', dogeData.usdPrice.toNumber())
    assert(typeof dogeData.usdPrice.toNumber() === "number")
    assert(typeof dogeData.btcPrice.toNumber() === "number")
  })

  it('can get monero pricing data', async function() {
    const moneroData = await getApiPrice('XMR')
    console.log('monero:', moneroData.usdPrice.toNumber())
    assert(typeof moneroData.usdPrice.toNumber() === "number")
    assert(typeof moneroData.btcPrice.toNumber() === "number")
  })
})