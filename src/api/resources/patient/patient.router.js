import express from "express";
import patientController from "./patient.controller";
import passport from 'passport';

export const patientRouter = express.Router();

patientRouter.route('/')
    .post(passport.authenticate('jwt', {session: false}), patientController.create)
    .get(passport.authenticate('jwt', {session: false}), patientController.findAll);

patientRouter.route('/:id')
    .get(passport.authenticate('jwt', {session: false}), patientController.findOne)
    .delete(passport.authenticate('jwt', {session: false}), patientController.delete)
    .put(passport.authenticate('jwt', {session: false}), patientController.update);