import { Request, Response } from 'express'
import { getRepository, getConnection } from 'typeorm'

import Sell from '../models/Sell'

class SellController {
    async create(req: Request, res: Response) {
        
    }
    async delete(req: Request, res: Response) {
        
    }

    async list(req: Request, res: Response) {
        try {
            const courses_all = await getRepository(Sell).find();
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
        const { username } = req.params;
        try {
            const user = await getRepository(Sell).findOne(username);
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
        
    }


}




export default new SellController();