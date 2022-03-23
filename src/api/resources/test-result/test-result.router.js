import express from "express";
import testResultController from "./test-result.controller";

export const testResultRouter = express.Router();

testResultRouter.route('/')
    .get(testResultController.findAll)
    .post(testResultController.create);

testResultRouter.route('/:id')
    .get(testResultController.findOne)
    .delete(testResultController.delete)
    .put(testResultController.update);