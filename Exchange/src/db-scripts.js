"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bignumber_js_1 = require("bignumber.js");
const conversions_1 = require("../../Common/src/conversions");
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
async function getCurrentPrices() {
    const coinPrices = await knex('price')
        .select('*')
        .orderBy('created', 'desc')
        .limit(4);
    return coinPrices.map((price) => {
        return {
            name: price.name,
            usdPrice: new bignumber_js_1.default(price.price_usd),
            btcPrice: new bignumber_js_1.default(price.price_btc)
        };
    });
}
exports.getCurrentPrices = getCurrentPrices;
async function getUserLedger(userName) {
    const balance = await knex('ledger')
        .select('usd', 'btc', 'doge', 'ltc', 'xmr', 'created', 'user_id', 'users.id', 'users.name')
        .join('users', 'users.id', 'ledger.user_id')
        .where('users.name', userName)
        .orderBy('created', 'desc');
    return {
        userName: balance[0].name,
        USD: new bignumber_js_1.default(balance[0].usd),
        BTC: conversions_1.fromSatoshi(balance[0].btc),
        DOGE: conversions_1.fromSatoshi(balance[0].doge),
        LTC: conversions_1.fromSatoshi(balance[0].ltc),
        XMR: conversions_1.fromSatoshi(balance[0].xmr),
        created: balance[0].created
    };
}
exports.getUserLedger = getUserLedger;
async function saveLedgerEntry(ledger) {
    console.log(ledger);
    const userId = await knex('users')
        .select('id')
        .where('name', ledger.userName);
    const newLedger = await knex('ledger')
        .insert({
        user_id: userId[0].id,
        usd: parseFloat(ledger.USD.toString()).toFixed(2),
        btc: conversions_1.toSatoshi(ledger.BTC),
        doge: conversions_1.toSatoshi(ledger.DOGE),
        ltc: conversions_1.toSatoshi(ledger.LTC),
        xmr: conversions_1.toSatoshi(ledger.XMR)
    })
        .returning('*');
    return newLedger;
}
exports.saveLedgerEntry = saveLedgerEntry;
//# sourceMappingURL=db-scripts.js.map