import { Request, Response } from 'express'
import { getRepository, getConnection } from 'typeorm'

import Sell from '../models/Sell'


class SellController {
    async create(req: Request, res: Response) {
        const SellRepository = getRepository(Sell);
        const sell_userId = req.headers.authorization
        const sell_amountSould = 0
        let { sell_name, sell_price, sell_state, sell_description, sell_icon, sell_amount } = req.body;
        
        let sell_AmountAvailable = sell_amount - sell_amountSould

        let data = {
            sell_name, sell_price, sell_state, sell_description, sell_icon, sell_amount, sell_userId, sell_AmountAvailable, sell_amountSould
        }

        console.log(data)

        const sell = SellRepository.create(data)
        await SellRepository.save(sell)

        return res.json(sell);


    }
    async delete(req: Request, res: Response) {
        
    }

    async list(req: Request, res: Response) {
        
    }
    async listOne(req: Request, res: Response) {
        
    }
    async update(req: Request, res: Response) {
        
    }


}




export default new SellController();