import express from 'express';
import dotenv from 'dotenv';
// import core from 'core';

import connectDb from './config/mongoConnection.js';
import authRouter from './routes/auth.route.js';
import reportRouter from './routes/report.route.js';
import adminRouter from './routes/admin.route.js';

const app = express();
const PORT = process.env.PORT || 3000;

dotenv.config();
app.use(express.json());
// app.use(core())

app.use('/auth/', authRouter);
app.use('/reports/', reportRouter);
app.use('/admin/users', adminRouter);

app.listen(PORT ,() => {
    connectDb();
    console.log(`You on port ${PORT}`)
})