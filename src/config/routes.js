import express from 'express';
import testResultController from '../api/controllers/test-result.controller';

export const router = express.Router();

router.get('/test-results', testResultController.findAll);
router.post('/test-results', testResultController.create);