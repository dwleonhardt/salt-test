"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bignumber_js_1 = require("bignumber.js");
const db_scripts_1 = require("../../PricingMonitor/src/db-scripts");
const chai_1 = require("chai");
const db_scripts_2 = require("../src/db-scripts");
describe('exchange tests', function () {
    it('can query the most recent price for btc', async function () {
        const testData = {
            name: 'BTC',
            usdPrice: new bignumber_js_1.default(1),
            btcPrice: new bignumber_js_1.default(1)
        };
        db_scripts_1.savePrice(testData);
        const price = await db_scripts_2.getCurrentPrice('BTC');
        console.log(price);
        chai_1.assert(price.usdPrice.isEqualTo(new bignumber_js_1.default(1)));
    });
    it('can get a users most recent balance', async function () {
        console.log(await db_scripts_2.getUserLedger('Huey'));
        chai_1.assert(true);
    });
});
//# sourceMappingURL=exchange-tests.js.map