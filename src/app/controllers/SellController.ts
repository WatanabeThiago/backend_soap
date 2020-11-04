import { Request, Response } from 'express'
import { getRepository, getConnection } from 'typeorm'

import Sell from '../models/Sell'

class SellController {
    async create(req: Request, res: Response) {
        const SellRepository = getRepository(Sell)

        const { sell_name, sell_price, sell_state, sell_description, sell_icon} = req.body
        const user_id = req.headers.user_id

        const data = {
            sell_name, sell_price, sell_state, sell_description, sell_icon, user_id 
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