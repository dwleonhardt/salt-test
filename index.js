"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');
const exchange = require('./Api/src/exchange-routes');
// const exchange = require('./routes/exchange');
// const priceData = require('./routes/price_data');
// const priceDate = require('./routes/price_date');
const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log('Listening on port', port);
});
app.use(cors());
app.use('/', exchange);
//# sourceMappingURL=index.js.map