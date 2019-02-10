"use strict";
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');
// const exchange = require('./routes/exchange');
// const priceData = require('./routes/price_data');
// const priceDate = require('./routes/price_date');
const knex = require('knex');
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log('Listening on port', port);
});
// app.use(cors());
// app.use('/exchange', exchange);
// app.use('/price_data', priceData);
// app.use('/price_date', priceDate);
// const getData = () => {
//   axios.get('https://ideas-by-nature-test.herokuapp.com/price_data');
// }
// setInterval(getData, 60000);
//# sourceMappingURL=index.js.map