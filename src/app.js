import express from 'express';
import mongoose from 'mongoose';
import { router } from './config/routes';
import logger from 'morgan';

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/medilab');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded());
app.use(logger('dev'));
app.use('/api', router);
app.use((req, res, next) => {
    const error = new Error('Not found');
    error.message = 'Invalid route';
    error.status = 404;
    next(error);
})

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