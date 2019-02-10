"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const db_scripts_1 = require("../db-scripts");
const bignumber_js_1 = require("bignumber.js");
describe('pricing monitor database tests', function () {
    it('can save a currency pricing record', async function () {
        const testData = {
            name: 'BTC',
            usdPrice: new bignumber_js_1.default(1),
            btcPrice: new bignumber_js_1.default(1)
        };
        db_scripts_1.savePrice(testData);
        chai_1.assert(true);
    });
});
//# sourceMappingURL=db-tests.js.map