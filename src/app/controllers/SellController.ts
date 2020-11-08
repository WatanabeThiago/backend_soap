import { Request, Response } from 'express'
import { getRepository, getConnection } from 'typeorm'

import Sell from '../models/Sell'
import SellView from '../view/SellsView'
class SellController {
    async create(req: Request, res: Response) {                     // Criar o Sell
        const SellRepository = getRepository(Sell);                 // Conectando ao repositorio do model Sell
        const sell_userId = req.headers.authorization               // Recebendo o sell_userID dos headers.authorization
        const sell_amountSould = 0                                  // Definindo o valor inicial da variavel como 0.
        let { sell_amount } = req.body;                             // Recebendo o sell_amount do req.body           
        let sell_AmountAvailable = sell_amount                      // Definindo o valor de sell_AmountAvailable sendo igual ao sell_amount
        console.log(...req.body)

        const requestImages = req.files as Express.Multer.File[]    // Preparando o Multer para ser usado nas linhas abaixo.

        const sell_photos = requestImages.map((image) => {          // Recebento sell_photos do Multer   
            return { path: image.filename }                         // Retornando o path em JSON
        })                                                          //    
        console.log({
            ...req.body,
            sell_amountSould,
            sell_photos,
            sell_userId
        })

        const sell = SellRepository.create({                        // Criando a linha na tabela.
            ...req.body,                                            // sell_name, sell_price, sell_state, sell_description, sell_icon, sell_amount
            sell_AmountAvailable,
            sell_amountSould,
            sell_photos,
            sell_userId

        })
        await SellRepository.save(sell)                             // Registrando dos dados na linha.

        return res.json(sell);                                      // Retornando a sell.


    }
    async delete(req: Request, res: Response) {                     // Deletar Sell
        const repository = getRepository(Sell);                     // Conectando ao repositorio do model Sell

        const sell_id = req.params.sell_id;                         // Recebendo o sell_id dos params (ADICIONAR MEDIDAS DE SEGURANÇA)
        console.log(req.params)

        const sellExists = await repository.findOne({ where: { sell_id } }) // Verificação se a Sell existe ou nao.

        if (!sellExists) {                                          // Verificação se a Sell existe ou nao.
            return res.sendStatus(404);
           
        }
        await getConnection()                                       
            .createQueryBuilder()
            .delete()
            .from(Sell)
            .where("sell_id = :sell_id", { sell_id })
            .execute();

        console.log(`Sell com ID ${sell_id} foi deletado.`)
        res.send(`Sell com ID ${sell_id} foi deletado.`);
    }

    async list(req: Request, res: Response) {                       // Listar todas as Sells
        const SellRepository = getRepository(Sell);                 // Conectando ao repositorio do model Sell

        const sell_photos = await SellRepository.find({             // Conectando às relações para pegar as imagens.
            relations: ['sell_photos'],
        });

        return res.json(SellView.renderMany(sell_photos));          // Retornar o JSON de acordo com a view Sell.
    }
    async listOne(req: Request, res: Response) {

    }
    async update(req: Request, res: Response) {
        const { sell_name, sell_price, sell_state, sell_description, sell_icon, sell_amount } = req.body;
        console.log(req.body)
        console.log(...req.body)
        const dados = {
            sell_name, sell_price, sell_state, sell_description, sell_icon, sell_amount
        }
        const sell_id = req.params;
        try {
            const courses_update = await getRepository(Sell).update(
                sell_id,
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




export default new SellController();