import mongoose from "mongoose";

const reportSchema = new mongoose.Schema({
    userId: {
        type: String,
        require: true, 
    },
    catagory: {
        type: String,
        emum: ["intelligence", "logistics", "alert"],
        require: true
    },
    urgancy: {
        type: String,
        enum: ["low", "medium", "high"],
        require: true
    },
    message: {
        type: String,
        require: true
    },
    imagePath: {
        type: String,
        require: true
    },
    sourceType: {
        type: String,
        require: true
    }
}, {timestamps: true}
// }, {timestamps: true, strict: false}
);

const Report = mongoose.model("Report", reportSchema);

export default Report