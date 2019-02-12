import BigNumber from 'bignumber.js'

export function toSatoshi(amount: BigNumber): number {
  return amount.toNumber() / 0.00000001
}

export function fromSatoshi(amount: number): BigNumber {
  return new BigNumber(amount * 0.00000001)
}