"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const cc_api_1 = require("../src/cc-api");
const pricing_monitor_1 = require("../src/pricing-monitor");
describe('pricing monitor http tests', function () {
    it('can get bitcoin pricing data', async function () {
        const btcData = await cc_api_1.getApiPrice('BTC');
        chai_1.assert(typeof btcData.usdPrice.toNumber() === "number");
        chai_1.assert(typeof btcData.btcPrice.toNumber() === "number");
    });
    it('can get liteCoin pricing data', async function () {
        const ltcData = await cc_api_1.getApiPrice('LTC');
        chai_1.assert(typeof ltcData.usdPrice.toNumber() === "number");
        chai_1.assert(typeof ltcData.btcPrice.toNumber() === "number");
    });
    it('can get doge pricing data', async function () {
        const dogeData = await cc_api_1.getApiPrice('DOGE');
        chai_1.assert(typeof dogeData.usdPrice.toNumber() === "number");
        chai_1.assert(typeof dogeData.btcPrice.toNumber() === "number");
    });
    it('can get monero pricing data', async function () {
        const moneroData = await cc_api_1.getApiPrice('XMR');
        chai_1.assert(typeof moneroData.usdPrice.toNumber() === "number");
        chai_1.assert(typeof moneroData.btcPrice.toNumber() === "number");
    });
    it('can poll an api for pricing data', async function () {
        console.log(await pricing_monitor_1.pricingMonitor());
        chai_1.assert(true);
    });
});
//# sourceMappingURL=pricing-tests.js.map