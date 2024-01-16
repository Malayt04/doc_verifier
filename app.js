import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoute from './Routes/authRoute.js';
import cors from 'cors';

dotenv.config();
const app=express();
const uri=process.env.URI
const port=process.env.PORT

app.use(cors());
app.use(express.json());
app.use('/api/auth',authRoute);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    console.log(err);
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message
    });
});



mongoose.connect(uri)
.then(app.listen(port, ()=>{
    console.log(`App is running on port ${port}`);
})).catch((error)=>console.log(error.message))

