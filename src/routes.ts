import { Router } from 'express'
import multer from 'multer'
import UserController from './app/controllers/UserController'
import AuthController from './app/controllers/AuthController'
import ProfileController from './app/controllers/ProfileController'
import SellController from './app/controllers/SellController'

import uploadConfig from './config/upload'

const router = Router()

const upload = multer(uploadConfig)

// /users
router.post('/users', upload.array('images'), UserController.create)
router.delete('/users/:user_id', UserController.delete)
router.get('/users', UserController.list)
router.get('/users/:user_username', UserController.listOne)
router.put('/users/:user_id', UserController.update)

// login
router.post('/login', AuthController.login)

//profile
router.get('/profile/:sell_userId', ProfileController.perfil)

//sell
router.post('/sell',upload.array('sell_photos'), SellController.create)
router.get('/sell',upload.array('sell_photos'), SellController.list)
router.delete('/sell/:sell_id', SellController.delete)
router.put('/sell/:sell_id', SellController.update)




export default router;