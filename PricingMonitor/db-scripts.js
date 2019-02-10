"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const knex = require('../knex');
function savePrice(coinData) {
    knex('currency')
        .insert({
        name: coinData.name,
        price_usd: coinData.usdPrice.toNumber(),
        price_btc: coinData.btcPrice.toNumber()
    })
        .then((data) => {
        console.log(data);
    });
}
exports.savePrice = savePrice;
//# sourceMappingURL=db-scripts.js.map