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
async function getUserLedger(userName) {
    const balance = await knex('ledger')
        .select('usd', 'btc', 'doge', 'ltc', 'xmr', 'created', 'user_id', 'users.id', 'users.name')
        .join('users', 'users.id', 'ledger.user_id')
        .where('users.name', userName)
        .orderBy('created', 'desc');
    return {
        userName: balance[0].name,
        USD: new bignumber_js_1.default(balance[0].usd),
        BTC: new bignumber_js_1.default(balance[0].btc),
        DOGE: new bignumber_js_1.default(balance[0].doge),
        LTC: new bignumber_js_1.default(balance[0].ltc),
        XMR: new bignumber_js_1.default(balance[0].xmr),
        created: balance[0].created
    };
}
exports.getUserLedger = getUserLedger;
async function saveLedgerEntry(ledger) {
    const userId = await knex('ledger')
        .select('id')
        .where('userName', ledger.userName);
    knex('ledger')
        .insert({
        user_id: userId,
        usd: ledger.USD,
        btc: ledger.BTC,
        doge: ledger.DOGE,
        ltc: ledger.LTC,
        xmr: ledger.XMR
    });
}
exports.saveLedgerEntry = saveLedgerEntry;
//# sourceMappingURL=db-scripts.js.map