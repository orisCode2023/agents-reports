import express from 'express';
import dotenv from 'dotenv';
import connectDb from './config/mongoConnection.js';
// import core from 'core';

const app = express();
const PORT = process.env.PORT || 3000;

dotenv.config();
app.use(express.json());
// app.use(core())

app.listen(PORT ,() => {
    connectDb();
    console.log(`You on port ${PORT}`)
})