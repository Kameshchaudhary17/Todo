import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import db from '../Backend/controller/db.js';
import getCardRoute from './routers/getCardRoutes.js'
import createCardRoute from './routers/createCardRoute.js';
import deleteCardRoute from './routers/deleteCardRoute.js';


dotenv.config()

const app = express()

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.use('/', createCardRoute)
app.use('/', getCardRoute)
app.use('/', deleteCardRoute)

const PORT = process.env.PORT
app.listen(PORT,(req,res)=>{
    console.log(`Server is running on port ${PORT}`);
})
