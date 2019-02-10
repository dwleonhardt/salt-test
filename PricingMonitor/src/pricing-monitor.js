"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cc_api_1 = require("./cc-api");
const db_scripts_1 = require("./db-scripts");
async function pricingMonitor() {
    const settings = await db_scripts_1.getMonitorSettings();
    if (settings.enabled) {
        await tbd();
        console.log('Price check');
        setTimeout(pricingMonitor, settings.timeout);
    }
    else {
        console.log('Monitor disabled');
        setTimeout(pricingMonitor, settings.timeout);
    }
}
exports.pricingMonitor = pricingMonitor;
async function tbd() {
    const prices = await cc_api_1.getPrices();
    db_scripts_1.savePrices(prices);
}
exports.tbd = tbd;
(() => pricingMonitor())();
//# sourceMappingURL=pricing-monitor.js.map