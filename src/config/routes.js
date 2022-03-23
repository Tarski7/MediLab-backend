import express from 'express';
import testResultController from '../api/resources/test-result/test-result.controller';

export const router = express.Router();

router.get('/test-results', testResultController.findAll);
router.get('/test-results/:id', testResultController.findOne);
router.delete('/test-results/:id', testResultController.delete);
router.put('/test-results/:id', testResultController.update);
router.post('/test-results', testResultController.create);