"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bignumber_js_1 = require("bignumber.js");
function toSatoshi(amount) {
    return amount.toNumber() / 0.00000001;
}
exports.toSatoshi = toSatoshi;
function fromSatoshi(amount) {
    return new bignumber_js_1.default(amount * 0.00000001);
}
exports.fromSatoshi = fromSatoshi;
//# sourceMappingURL=conversions.js.map