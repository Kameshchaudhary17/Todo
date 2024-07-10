import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import db from '../Backend/controller/db.js';


dotenv.config()

const app = express()

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());


const PORT = process.env.PORT
app.listen(PORT,(req,res)=>{
    console.log(`Server is running on port ${PORT}`);
})
