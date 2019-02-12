import {getPrices} from "./cc-api";
import {getMonitorSettings, savePrices} from "./db-scripts";

export async function pricingMonitor() {
  const settings = await getMonitorSettings()
  if (settings.enabled) {
    await batchPrices()
    console.log('Price check')
    setTimeout(pricingMonitor, settings.timeout)
  }
  else {
    console.log('Monitor disabled')
    setTimeout(pricingMonitor, settings.timeout)
  }
}

export async function batchPrices() {
  const prices = await getPrices()
  savePrices(prices)
}

(() => pricingMonitor())()