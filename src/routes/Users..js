import express from 'express'
import { CreateUser,} from '../controllers/userController.js'

const usersRouter = express.Router()

usersRouter.get('/register-user' , registerUser)
usersRouter.get('/login' , loginUser)


export default usersRouter