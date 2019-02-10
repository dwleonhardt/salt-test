"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const cc_api_1 = require("../cc-api");
describe('pricing monitor http tests', function () {
    it('can get bitcoin pricing data', async function () {
        const btcData = await cc_api_1.getPrice('BTC');
        console.log('btcPrice:', btcData.usdPrice.toNumber());
        chai_1.assert(typeof btcData.usdPrice.toNumber() === "number");
        chai_1.assert(typeof btcData.btcPrice.toNumber() === "number");
    });
    it('can get liteCoin pricing data', async function () {
        const ltcData = await cc_api_1.getPrice('LTC');
        console.log('ltcPrice:', ltcData.usdPrice.toNumber());
        chai_1.assert(typeof ltcData.usdPrice.toNumber() === "number");
        chai_1.assert(typeof ltcData.btcPrice.toNumber() === "number");
    });
    it('can get doge pricing data', async function () {
        const dogeData = await cc_api_1.getPrice('DOGE');
        console.log('dogePrice:', dogeData.usdPrice.toNumber());
        chai_1.assert(typeof dogeData.usdPrice.toNumber() === "number");
        chai_1.assert(typeof dogeData.btcPrice.toNumber() === "number");
    });
    it('can get monero pricing data', async function () {
        const moneroData = await cc_api_1.getPrice('XMR');
        console.log('monero:', moneroData.usdPrice.toNumber());
        chai_1.assert(typeof moneroData.usdPrice.toNumber() === "number");
        chai_1.assert(typeof moneroData.btcPrice.toNumber() === "number");
    });
});
//# sourceMappingURL=pricing-tests.js.map