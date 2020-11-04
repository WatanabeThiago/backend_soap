import { Request, Response } from 'express'
import { getRepository, getConnection } from 'typeorm'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

import User from '../models/User'
import Sell from '../models/Sell'

class ProfileController {
    async perfil(req: Request, res: Response) {
        const sell = getRepository(Sell);
        const user_id_header = req.headers.user_id_header;

        console.log(user_id_header)

        const sells = await getConnection('sell')
            .createQueryBuilder()
            .select("sell_id")
            .from(User, "user")
            .where("user_id", { user_id: user_id_header })
            
        return res.json(sells)


    }
}




export default new ProfileController();