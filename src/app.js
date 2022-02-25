import express from 'express';
import mongoose from 'mongoose'
import { router } from './config/routes'

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/medilab');

const app = express();
const PORT = 3000;

app.use('/api', router);
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    return res.json({
        error: {
            message: error.message
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
});