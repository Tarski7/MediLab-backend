import express from "express";
import { patientRouter } from "./resources/patient";
import { testResultRouter } from "./resources/test-result";
import { userRouter } from "./resources/user";

export const restRouter = express.Router();
restRouter.use('/test-results', testResultRouter);
restRouter.use('/patients', patientRouter);
restRouter.use('/users', userRouter);