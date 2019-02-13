"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_scripts_1 = require("./db-scripts");
async function placeOrder(order) {
    const orderPrice = await getOrderPrice(order);
    const ledger = await db_scripts_1.getUserLedger(order.userName);
    if (orderPrice.price.isLessThanOrEqualTo(ledger[order.from])) {
        const newLedger = Object.assign({}, ledger, { [order.from]: ledger[order.from].minus(orderPrice.price), [order.to]: ledger[order.to].plus(order.amount) });
        await db_scripts_1.saveLedgerEntry(newLedger);
        return newLedger;
    }
    else {
        return ledger;
    }
}
exports.placeOrder = placeOrder;
async function getOrderPrice(order) {
    const toPrice = await db_scripts_1.getCurrentPrice(order.to);
    if (order.from === 'USD') {
        return {
            name: order.to,
            price: toPrice.usdPrice.multipliedBy(order.amount)
        };
    }
    else if (order.from === 'BTC') {
        return {
            name: order.to,
            price: toPrice.btcPrice.multipliedBy(order.amount)
        };
    }
    else {
        throw Error('Purchase order currency is not supported at this time');
    }
}
exports.getOrderPrice = getOrderPrice;
async function getPortfolio(userName) {
    const ledger = await db_scripts_1.getUserLedger(userName);
    const btc = await db_scripts_1.getCurrentPrice('BTC');
    const ltc = await db_scripts_1.getCurrentPrice('LTC');
    const doge = await db_scripts_1.getCurrentPrice('DOGE');
    const xmr = await db_scripts_1.getCurrentPrice('XMR');
    const balances = [
        { currency: 'BTC', usdValue: ledger.BTC.multipliedBy(btc.usdPrice) },
        { currency: 'LTC', usdValue: ledger.LTC.multipliedBy(ltc.usdPrice) },
        { currency: 'DOGE', usdValue: ledger.DOGE.multipliedBy(doge.usdPrice) },
        { currency: 'XMR', usdValue: ledger.XMR.multipliedBy(xmr.usdPrice) }
    ];
    return {
        userName: userName,
        balances: balances
    };
}
exports.getPortfolio = getPortfolio;
//# sourceMappingURL=crypto-exchange.js.map