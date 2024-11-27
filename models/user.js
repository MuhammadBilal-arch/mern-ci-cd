import mongoose from "mongoose";

const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        firstName: {
            type: String, 
        },
        lastName: {
            type: String, 
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        posts: [ { ref: "Post" , type : mongoose.Schema.Types.ObjectId} ],
    },
)

const User = mongoose.model('User', userSchema);
export default User;