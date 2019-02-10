"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bignumber_js_1 = require("bignumber.js");
const axios = require('axios');
async function getApiPrice(coinName) {
    const coinData = await axios.get(`https://coincap.io/page/${coinName}`);
    return {
        name: coinName,
        usdPrice: new bignumber_js_1.default(coinData.data.price_usd),
        btcPrice: new bignumber_js_1.default(coinData.data.price_btc)
    };
}
exports.getApiPrice = getApiPrice;
//# sourceMappingURL=cc-api.js.map