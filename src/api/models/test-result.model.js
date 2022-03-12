import mongoose from "mongoose";
import mongoosePaginate from 'mongoose-paginate';

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

TestResultSchema.plugin(mongoosePaginate);

export default mongoose.model('TestResult', TestResultSchema);