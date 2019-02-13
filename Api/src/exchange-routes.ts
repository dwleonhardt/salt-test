import { getUserLedger } from '../../Exchange/src/db-scripts'
import { Router, Request, Response } from 'express'
import bodyParser = require('body-parser')
import {getPortfolio} from "../../Exchange/src/crypto-exchange";


const router: Router = Router();

router.use(bodyParser.urlencoded({ extended: true }))
router.use(bodyParser.json())

router.get('/ledger', async (req: Request, res: Response) => {
  const ledger = await getUserLedger(req.query.userName)
  res.send(ledger)
})

router.get('/portfolio', async (req: any, res: any) => {
  const portfolio = await getPortfolio(req.query.userName)
  res.send(portfolio)
})

module.exports = router