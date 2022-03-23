import express from "express";
import patientController from "./patient.controller";

export const patientRouter = express.Router();

patientRouter.route('/')
    .post(patientController.create)
    .get(patientController.findAll);

patientRouter.route('/:id')
    .get(patientController.findOne)
    .delete(patientController.delete)