import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

import User from '../models/User'

class AuthController {
    async login(req: Request, res: Response) {
        const repository = getRepository(User);                                         // Receber o repositório do model User

        const { user_email, user_password } = req.body;                                 // Receber dados do front/mobile.
        console.log({ user_email, user_password });
        const user = await repository.findOne({ where: { user_email } })                // Procurar pelo user_email no banco de dados.
        
        if(!user)                                                                       // Verificar se esse email não existe no banco de dados.
        {
            res.sendStatus(401)                                                         // Senão existe, retornar status 401.
        }
        
        
        const isValidPassword = await bcrypt.compare(user_password, user.user_password) // Comparar a senha do usuario com a senha do banco de dados.
        console.log("Comparado")
        if(!isValidPassword)                                                            // Se a senha estiver errada, retornar "Senha errada"
        {
            return res.json("Senha errada")
        }
        console.log("isValidPassword")
        const token = jwt.sign({id: user.user_id}, 'secret', {expiresIn: '1d'})         // Gerar token de autenticação

        return res.json({                                                               // Retornar usuario
            user,
            token
        })

    }
    
}


export default new AuthController();                                                    // Exportar rota.