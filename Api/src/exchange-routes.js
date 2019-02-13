"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_scripts_1 = require("../../Exchange/src/db-scripts");
const express_1 = require("express");
const bodyParser = require("body-parser");
const crypto_exchange_1 = require("../../Exchange/src/crypto-exchange");
const bignumber_js_1 = require("bignumber.js");
const router = express_1.Router();
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
router.get('/ledger', async (req, res) => {
    const ledger = await db_scripts_1.getUserLedger(req.query.userName);
    res.send(ledger);
});
router.get('/portfolio', async (req, res) => {
    const portfolio = await crypto_exchange_1.getPortfolio(req.query.userName);
    res.send(portfolio);
});
router.post('/order', async (req, res) => {
    const request = req.body;
    const order = {
        userName: request.userName,
        to: request.to,
        from: request.from,
        amount: new bignumber_js_1.default(request.amount),
        filled: false
    };
    const newLedger = crypto_exchange_1.placeOrder(order);
    res.send(newLedger);
});
module.exports = router;
//# sourceMappingURL=exchange-routes.js.map