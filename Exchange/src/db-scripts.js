"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bignumber_js_1 = require("bignumber.js");
const knex = require('../../knex');
async function getCurrentPrice(coinName) {
    const coinPrice = await knex('price')
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
async function getUserLedger(userId) {
    const balance = await knex('ledger')
        .select('usd', 'btc', 'doge', 'ltc', 'xmr', 'created', 'user_id', 'users.id', 'users.name')
        .join('users', 'users.id', 'ledger.user_id')
        .where('users.id', userId)
        .orderBy('created', 'desc');
    return {
        userName: balance[0].name,
        usd: balance[0].usd,
        btc: balance[0].btc,
        doge: balance[0].doge,
        ltc: balance[0].ltc,
        xmr: balance[0].xmr,
        created: balance[0].created
    };
}
exports.getUserLedger = getUserLedger;
//# sourceMappingURL=db-scripts.js.map