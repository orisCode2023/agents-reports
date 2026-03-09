import express from 'express';
import login from '../controllers/auth/login.controller.js';
import getMe from '../controllers/auth/me.controller.js';


const authRouter = express.Router();

authRouter.post('/login', login)
authRouter.get('/me', getMe)

export default authRouter;