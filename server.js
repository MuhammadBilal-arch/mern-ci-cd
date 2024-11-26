import express from 'express';
import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js';

import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/users', userRoutes);
app.get('/',(res,req)=> {
    res.send("API is running...");
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));