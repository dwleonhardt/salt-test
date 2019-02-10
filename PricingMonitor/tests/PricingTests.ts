import { assert } from 'chai'
import {getPrice} from "../cc-api";

describe('get coin price tests', function() {
  it('can get bitcoin pricing data', async function() {
    const btcData = await getPrice('BTC')
    console.log('btcPrice:', btcData.usdPrice.toNumber())
    assert(typeof btcData.usdPrice.toNumber() === "number")
    assert(typeof btcData.btcPrice.toNumber() === "number")
  })

  it('can get liteCoin pricing data', async function() {
    const ltcData = await getPrice('LTC')
    console.log('ltcPrice:', ltcData.usdPrice.toNumber())
    assert(typeof ltcData.usdPrice.toNumber() === "number")
    assert(typeof ltcData.btcPrice.toNumber() === "number")
  })

  it('can get doge pricing data', async function() {
    const dogeData = await getPrice('DOGE')
    console.log('dogePrice:', dogeData.usdPrice.toNumber())
    assert(typeof dogeData.usdPrice.toNumber() === "number")
    assert(typeof dogeData.btcPrice.toNumber() === "number")
  })

  it('can get monero pricing data', async function() {
    const moneroData = await getPrice('XMR')
    console.log('monero:', moneroData.usdPrice.toNumber())
    assert(typeof moneroData.usdPrice.toNumber() === "number")
    assert(typeof moneroData.btcPrice.toNumber() === "number")
  })
})