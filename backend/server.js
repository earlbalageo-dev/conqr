import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db.js';
import userRoutes from './routes/userRoutes.js';
import morgan from 'morgan';
import { errorHandler } from './middleware/errorHandler.js';
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
app.use(errorHandler);
//connect to server
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server Running on Port: ${PORT}`));
