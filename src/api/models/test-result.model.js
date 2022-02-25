import mongoose from "mongoose";

const { Schema } = mongoose;

const TestResultSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String
    }
});

export default mongoose.model('TestResult', TestResultSchema);