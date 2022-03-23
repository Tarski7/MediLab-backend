import mongoose from "mongoose";

const { Schema } = mongoose;

const PatientSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: Date,
        required: true
    },
    pesel: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phoneNo: {
        type: Number,
        required: true
    },
});

export default mongoose.model('Patient', PatientSchema);