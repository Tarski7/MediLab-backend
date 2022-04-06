import express from 'express';
import logger from 'morgan';
import cors from 'cors';
import passport from 'passport';
import { configureJWTStrategy } from './passport-jwt';
import { configureGoogleStrategy } from './passport-google';
import { devConfig } from '../../config/env/development';
import session from 'express-session';
import User from '../resources/user/user.model';

export const setGlobalMiddleware = app => {
    app.use(express.json());
    app.use(express.urlencoded({extended: true}));
    app.use(cors());
    app.use(logger('dev'));
    app.use(session({
        secret: devConfig.secret,
        resave: true,
        saveUninitialized: true
    }));
    app.use(passport.initialize());
    app.use(passport.session());
    configureJWTStrategy();
    configureGoogleStrategy();

    // save user into session
    passport.serializeUser((user, done) => {
        done(null, user.id);
    });
    // extract userId from session
    passport.deserializeUser((id, done) => {
        done(null, {id: 'ASEgesges'});
        /*User.findById(id, (err, user) => {
            done(null, user);
        });*/
    });
}