import {LedgerEntry, Order, OrderPrice} from '../../Common/src/types'
import {getCurrentPrice, getUserLedger, saveLedgerEntry} from './db-scripts'

export async function placeOrder(order: Order): Promise<LedgerEntry> {
  const orderPrice = await getOrderPrice(order)
  const ledger = await getUserLedger( order.userName )
  if (orderPrice.price.isLessThanOrEqualTo(ledger[order.from])) {
    const newLedger = {
      ...ledger,
      [order.from]: ledger[order.from].minus(orderPrice.price),
      [order.to]: ledger[order.to].plus(order.amount)
    }
    await saveLedgerEntry(newLedger)
    return newLedger
  }
  else {
    return ledger
  }
}

export async function getOrderPrice(order: Order): Promise<OrderPrice> {
  const toPrice = await getCurrentPrice(order.to)
  if (order.from === 'USD') {
    return {
      name: order.to,
      price: toPrice.usdPrice.multipliedBy(order.amount)
    }
  }
  else if (order.from === 'BTC'){
    return {
      name: order.to,
      price: toPrice.btcPrice.multipliedBy(order.amount)
    }
  }
  else {
    throw Error('Purchase order currency is not supported at this time')
  }
}