import { Request, Response } from 'express'
import { getRepository, getConnection } from 'typeorm'

import Sell from '../models/Sell'
import SellView from '../view/SellsView'



class SellController {
    async create(req: Request, res: Response) {
        const SellRepository = getRepository(Sell);
        const sell_userId = req.headers.authorization
        const sell_amountSould = 0
        let { sell_amount } = req.body;
        let sell_AmountAvailable = sell_amount
        console.log(...req.body)

        const requestImages = req.files as Express.Multer.File[]


        const sell_photos = requestImages.map((image) => {
            return { path: image.filename }
        })
        console.log({
            ...req.body,
            sell_amountSould,
            sell_photos,
            sell_userId
        })

        const sell = SellRepository.create({
            ...req.body,
            sell_AmountAvailable,
            sell_amountSould,
            sell_photos,
            sell_userId

        })
        await SellRepository.save(sell)

        return res.json(sell);


    }
    async delete(req: Request, res: Response) {

    }

    async list(req: Request, res: Response) {
        const SellRepository = getRepository(Sell);

        const sell_photos = await SellRepository.find({
            relations: ['sell_photos'],
        });

        return res.json(SellView.renderMany(sell_photos));
    }
    async listOne(req: Request, res: Response) {

    }
    async update(req: Request, res: Response) {

    }


}




export default new SellController();