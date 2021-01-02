import {Router} from 'express'
const router = Router()

import {getUsers,createUser,getUser,updateUser} from '../controllers/user.controller'

router.get('/users',getUsers)
router.post('/users',createUser)
router.get('user/:id',getUser)
router.put('users/:id',updateUser)
router.delete('user/:id',deleteUser)

export default router