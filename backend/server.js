import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import connectDB from './db.js';
import userRoutes from './routes/userRoutes.js';
import morgan from 'morgan';

const app = express();

dotenv.config();

app.use(express.json());

//connect to DB

connectDB();

if (process.env.NODE_ENV === 'dev') {
  app.use(morgan('dev'));
}

//mount routes
app.use('/', userRoutes);
//middlewares

//connect to server
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server Running on Port: ${PORT}`));
