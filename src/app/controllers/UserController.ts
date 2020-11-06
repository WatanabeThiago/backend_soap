import { Request, Response } from 'express'
import { getRepository, getConnection } from 'typeorm'

import User from '../models/User'
import UsersView from '../view/UsersView'

class UserController {
    async create(req: Request, res: Response) {
        const UserRepository = getRepository(User);

        const {user_email } = req.body;
            
        const requestImages = req.files as Express.Multer.File[]
        
        
        const images = requestImages.map((image) => {
            return { path: image.filename }
        })

        const userExists = await UserRepository.findOne({ where: { user_email } })

        if (userExists) {
            return res.sendStatus(409);
        }

        const user = UserRepository.create({
            ...req.body,
            images
        
        })
        await UserRepository.save(user)

        return res.json(user);

    }
    async delete(req: Request, res: Response) {
        const repository = getRepository(User);

        const user_id = req.params.user_id;

        const userExists = await repository.findOne({ where: { user_id } })


        console.log(req.params)

        if (!userExists) {
            return res.sendStatus(404);
           
        }

        await getConnection()
            .createQueryBuilder()
            .delete()
            .from(User)
            .where("user_id = :user_id", { user_id })
            .execute();

        console.log('Deletado')
        res.send(`Usuario com ID ${user_id} foi deletado.`);
    }

    async list(req: Request, res: Response) {
        try {
            const courses_all = await getRepository(User).find();
            return res.status(200).json({
                message: "Sucesso ao buscar todos os usuarios.",
                data: courses_all,
            });
        } catch (error) {
            return res.status(400).json({
                message: "Falha ao buscar os usuarios..",
                info: error,
            });
        }
    }
    async listOne(req: Request, res: Response) {
        const { user_username } = req.params;
        try {
            const user = await getRepository(User).findOne(user_username);
            return res.status(200).json({
                message: "Get course operation success.",
                data: user,
            });
        } catch (error) {
            return res.status(401).json({
                message: "get courses operation failed, try agaain.",
                info: error,
            });
        }
    }
    async update(req: Request, res: Response) {
        const { user_name, user_username,user_email, user_password } = req.body;
        console.log(req.body)
        const dados = {
            user_name, user_username, user_email, user_password
        }
        const user_id = req.params;
        try {
            const courses_update = await getRepository(User).update(
                user_id,
                dados
            );
            return res.status(200).json({
                message: "Update operation success.",
                data: courses_update,
            });
        } catch (error) {
            return res.status(400).json({
                message: "Update operation failed, try again.",
                info: error,
            });
        }
    }


}




export default new UserController();