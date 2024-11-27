import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://Bilal123:BQpnUiPTd1sihJun@mern.c8ace.mongodb.net/?retryWrites=true&w=majority&appName=MERN',{
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("MongoDB connected");
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

export default connectDB;