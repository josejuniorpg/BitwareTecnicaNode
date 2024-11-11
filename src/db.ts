import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/csvdb');
        console.log('Connect to mongo');
    } catch (err) {
        console.error('Error during  MongoDB connection:', err);
        process.exit(1);
    }
};

export default connectDB;
