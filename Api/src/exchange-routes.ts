import { getUserLedger } from '../../Exchange/src/db-scripts'
import { Router, Request, Response } from 'express'
import bodyParser = require('body-parser')
import {getPortfolio, placeOrder} from "../../Exchange/src/crypto-exchange";
import {Order} from "../../Common/src/types";
import BigNumber from "bignumber.js";


const router: Router = Router();

router.use(bodyParser.urlencoded({ extended: true }))
router.use(bodyParser.json())

router.get('/ledger', async (req: Request, res: Response) => {
  const ledger = await getUserLedger(req.query.userName)
  res.send(ledger)
})

router.get('/portfolio', async (req: Request, res: Response) => {
  const portfolio = await getPortfolio(req.query.userName)
  res.send(portfolio)
})

router.post('/order', async (req: Request, res: Response) => {
  const request = req.body
  const order: Order =  {
    userName: request.userName,
    to: request.to,
    from: request.from,
    amount: new BigNumber(request.amount),
    filled: false
  }
  const newLedger = placeOrder(order)

  res.send(newLedger)
})

module.exports = router