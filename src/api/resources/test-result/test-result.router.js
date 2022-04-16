import express from "express";
import testResultController from "./test-result.controller";
import passport from 'passport';

export const testResultRouter = express.Router();

testResultRouter.route('/')
    .get(passport.authenticate('jwt', {session: false}), testResultController.findAll)
    .post(passport.authenticate('jwt', {session: false}), testResultController.create);

testResultRouter.route('/:id')
    .get(passport.authenticate('jwt', {session: false}), testResultController.findOne)
    .delete(passport.authenticate('jwt', {session: false}), testResultController.delete)
    .put(passport.authenticate('jwt', {session: false}), testResultController.update);

testResultRouter.get('/:id/download', passport.authenticate('jwt', {session: false}), testResultController.download);