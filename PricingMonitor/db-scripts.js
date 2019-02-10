"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bignumber_js_1 = require("bignumber.js");
const knex = require('../knex');
function savePrice(coinData) {
    knex('currency')
        .insert({
        name: coinData.name,
        price_usd: coinData.usdPrice.toNumber(),
        price_btc: coinData.btcPrice.toNumber()
    });
}
exports.savePrice = savePrice;
async function getCurrentPrice(coinName) {
    const coinPrice = await knex('currency')
        .select('*')
        .where('name', coinName)
        .orderBy('created', 'desc')
        .limit(1);
    return {
        name: coinPrice[0].name,
        usdPrice: new bignumber_js_1.default(coinPrice[0].price_usd),
        btcPrice: new bignumber_js_1.default(coinPrice[0].price_btc)
    };
}
exports.getCurrentPrice = getCurrentPrice;
//# sourceMappingURL=db-scripts.js.map