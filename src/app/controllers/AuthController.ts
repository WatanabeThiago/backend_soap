import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

import User from '../models/User'

class AuthController {
    async login(req: Request, res: Response) {
        const repository = getRepository(User);

        const { email, password } = req.body;
        console.log(req.body);
        const user = await repository.findOne({ where: { email } })
        
        if(!user)
        {
            res.sendStatus(401)
        }
        
        
        const isValidPassword = await bcrypt.compare(password, user.user_password)
        console.log("Comparado")
        if(!isValidPassword)
        {
            return res.json("Senha errada")
        }
        console.log("isValidPassword")
        const token = jwt.sign({id: user.user_id}, 'secret', {expiresIn: '1d'})

        return res.json({
            user,
            token
        })

    }
    


}




export default new AuthController();