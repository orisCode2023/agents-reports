import express from 'express';
import login from '../controllers/auth/login.controller.js';
import getMe from '../controllers/auth/me.controller.js';
import protectRoute from '../middleware/protectRoute.js';


const authRouter = express.Router();

authRouter.post('/login', login)
authRouter.get('/me', protectRoute, getMe)

export default authRouter;