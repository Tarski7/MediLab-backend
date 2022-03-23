import express from "express";
import { patientRouter } from "./resources/patient/patient.router";
import { testResultRouter } from "./resources/test-result";

export const restRouter = express.Router();
restRouter.use('/test-results', testResultRouter);
restRouter.use('/patients', patientRouter);