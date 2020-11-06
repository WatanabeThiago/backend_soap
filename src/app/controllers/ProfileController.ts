import { Request, Response } from 'express'
import { getRepository, getConnection } from 'typeorm'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

import User from '../models/User'
import Sell from '../models/Sell'
import UserView from '../view/UsersView'

class ProfileController {
    async perfil(req: Request, res: Response) {
        
        const { id } = req.params;

        const orphanagesRepository = getRepository(User);
    
        const orphanage = await orphanagesRepository.findOneOrFail(id, {
          relations: ['images'],
        });
    
        return res.json(UserView.render(orphanage));


    }


}


export default new ProfileController();