import express from 'express';
import createUsers from '../controllers/user/createUser.controller.js';
import getUsers from '../controllers/user/getUsers.controller.js';

const adminRouter = express.Router();

adminRouter.post('/', createUsers)
adminRouter.get('/', getUsers)

export default adminRouter;