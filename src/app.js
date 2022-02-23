import express from 'express';
import { router } from './config/routes'

//const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.json({
        msg: 'Welcome to MediLab backend'
    });
});

app.use('/api', router);

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
});