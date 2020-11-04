import { Router } from 'express'
import UserController from './app/controllers/UserController'
import AuthController from './app/controllers/AuthController'
import ProfileController from './app/controllers/ProfileController'
import SellController from './app/controllers/SellController'
const router = Router()


router.post('/users', UserController.create)
router.delete('/users/:user_id', UserController.delete)
router.get('/users', UserController.list)
router.get('/users/:user_username', UserController.listOne)
router.put('/users/:user_id', UserController.update)

router.post('/login', AuthController.login)

router.get('/perfil', ProfileController.perfil)

router.post('/sell', SellController.create)


export default router;