import {CoinName, CoinPrice} from "./types";
import BigNumber from "bignumber.js";

const axios = require('axios')

export async function getPrice(coinName: CoinName): Promise<CoinPrice> {
  const coinData = await axios.get(`https://coincap.io/page/${coinName}`)
  return {
    name: coinName,
    usdPrice: new BigNumber(coinData.data.price_usd),
    btcPrice: new BigNumber(coinData.data.price_btc)
  }
}
