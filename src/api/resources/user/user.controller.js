import userService from "./user.service"
import HttpStatus from 'http-status-codes';
import User from "./user.model";
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { devConfig } from "../../../config/env/development";

export default {
    async signup(req, res) {
        try {
            const {error, value} = userService.validateSignupSchema(req.body);
            if (error && error.details) {
                return res.status(HttpStatus.BAD_REQUEST).json(error);
            }

            const existingUser = await User.findOne({'local.email': value.email});
            if (existingUser) {
                return res.status(HttpStatus.BAD_REQUEST).json({err: 'You have already created account'});
            }

            const user = await new User();
            user.local.email = value.email;
            user.local.name = value.name;

            const salt = await bcryptjs.genSalt();
            const hash = await bcryptjs.hash(value.password, salt);
            user.local.password = hash;
            await user.save();

            return res.json({success: true, message: 'User created successfully'});
        } catch(err) {
            console.error(err);
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(err);
        }
    },

    async login(req, res) {
        try {
            const {error, value} = userService.validateLoginSchema(req.body);
            if (error && error.details) {
                return res.status(HttpStatus.BAD_REQUEST).json(error);
            }

            const user = await User.findOne({'local.email': value.email});
            if (!user) {
                return res.status(HttpStatus.BAD_REQUEST).json({err: 'Invalid email or password'});
            }

            const matched = bcryptjs.compare(value.password, user.password);
            if (!matched) {
                return res.status(HttpStatus.UNAUTHORIZED).json({err: 'Invalid credentials'});
            }

            const token = jwt.sign({id: user._id}, devConfig.secret, {expiresIn: '1d'});

            return res.json({success: true, token});
        } catch(err) {
            console.error(err);
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(err);
        }
    },

    async test(req, res) {
        return res.json(req.user);
    }
}