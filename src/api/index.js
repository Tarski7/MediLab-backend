import express from "express";
import { authRouter } from "./resources/auth/auth.router";
import { patientRouter } from "./resources/patient";
import { testResultRouter } from "./resources/test-result";
import { userRouter } from "./resources/user";

export const restRouter = express.Router();
restRouter.use('/test-results', testResultRouter);
restRouter.use('/patients', patientRouter);
restRouter.use('/users', userRouter);
restRouter.use('/auth', authRouter);