import express from 'express';
import dotenv from 'dotenv';
import cookieParser from "cookie-parser";
// import core from 'core';

import connectDb from './config/mongoConnection.js';
import authRouter from './routes/auth.route.js';
import reportRouter from './routes/report.route.js';
import adminRouter from './routes/admin.route.js';
import protectRoute from './middleware/protectRoute.js';
import protectRouteAdmin from './middleware/protectRouteAdmin.js';

const app = express();
const PORT = process.env.PORT || 3000;

dotenv.config();
app.use(express.json());
app.use(cookieParser());
// app.use(core())

app.use('/auth/', authRouter);
app.use('/reports/', protectRoute, reportRouter);
app.use('/admin/users', adminRouter);
// app.use('/admin/users', protectRouteAdmin, adminRouter);

app.listen(PORT ,() => {
    connectDb();
    console.log(`You on port ${PORT}`)
})