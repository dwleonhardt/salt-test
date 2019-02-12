"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const knex = require('../../knex');
function savePrices(coinData) {
    coinData.forEach(data => savePrice(data));
}
exports.savePrices = savePrices;
async function savePrice(coinData) {
    await knex('price')
        .insert({
        name: coinData.name,
        price_usd: coinData.usdPrice.toNumber(),
        price_btc: coinData.btcPrice.toNumber()
    });
}
exports.savePrice = savePrice;
async function getMonitorSettings() {
    const settings = await knex('monitor')
        .select('*')
        .limit(1);
    return {
        enabled: settings[0].enabled,
        timeout: settings[0].timeout
    };
}
exports.getMonitorSettings = getMonitorSettings;
//# sourceMappingURL=db-scripts.js.map