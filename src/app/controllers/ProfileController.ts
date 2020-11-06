import { Request, Response } from 'express'
import { getRepository, getConnection } from 'typeorm'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

import User from '../models/User'
import Sell from '../models/Sell'

class ProfileController {
    async perfil(req: Request, res: Response) {
        try {

            const sell_userId = req.params
            console.log(sell_userId)
            const sells = await getRepository(Sell)
                .find({
                    where: sell_userId 
                })


            console.log(sells)


            return res.status(200).json({
                message: "Sucesso ao buscar todos os Sells.",
                data: sells,
            })
        } catch (error) {
            return res.status(400).json({
                message: "Falha ao buscar os Sells..",
                info: error,
            });
        }



    }


}


export default new ProfileController();