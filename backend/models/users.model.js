import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    id: {
        type: String,
        require: true
    },
    agentCode: {
        type: String,
        require: true
    },
    fullName: {
        type: String,
        require: true
    },
    passwordHash: {
        type: String,
        require: true
    },
    role: {
        type: String,
        enum: ['admin', 'agent'],
        require: true
    },
    createdAt: {
        type: String,
        require: true
    }
}, {timestamps: true}
);

const User = mongoose.model("User", userSchema);

export default User