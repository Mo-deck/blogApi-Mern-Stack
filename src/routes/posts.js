import express from 'express'
import { createPost } from '../controllers/postsController.js';

const postRouter = express.Router()

postRouter.get('/' , createPost)


export default postRouter;