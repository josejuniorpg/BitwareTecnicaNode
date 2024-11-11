import express from 'express';
import connectDB from './db';
import userRoutes from './routes/userRoutes';

const app = express();
const PORT = 3000;

connectDB();

app.use(express.json());

app.use('/api/users', userRoutes);

app.listen(PORT, () => {
    console.log(`Server running on: http://localhost:${PORT}`);
});
