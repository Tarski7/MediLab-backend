import express from "express";
import userController from "./user.controller";
import passport from 'passport';

export const userRouter = express.Router();
userRouter.post('/signup', userController.signup);
userRouter.post('/login', userController.login);
userRouter.post('/forgot-password', userController.forgotPassword);
userRouter.post('/test', passport.authenticate('jwt', {session: false}), userController.test);
userRouter.put('/reset-password', passport.authenticate('jwt', {session: false}), userController.resetPassword);