import { Request, Response } from 'express'
import { getRepository } from 'typeorm'

import User from '../models/User'
import UserView from '../view/UsersView'
class ProfileController {
    async perfil(req: Request, res: Response) {
        const { user_id } = req.params;                             // Recebendo o user_id dos req.params

        const userRepository = getRepository(User);                 // Conectando ao repositorio do model User.
    
        const user = await userRepository.findOneOrFail(user_id, {  // Conectando ao user_id e seus relacionamentos.
          relations: ['images'],
        });
    
        return res.json(UserView.render(user));                      // Retornando os dados em formato JSON de acordo com a view.
    }
}

export default new ProfileController();                             // Exportando a rota de perfil.