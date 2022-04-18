import jwt from 'jsonwebtoken';
import { devConfig } from '../../config/env/development';
import bcryptjs from 'bcryptjs';

export const getJWTToken = (payload) => {
    const token = jwt.sign(payload, devConfig.secret, {expiresIn: '1d'});

    return token;
};

export const getEncryptedPassword = async (password) => {
    const salt = await bcryptjs.genSalt();
    const hash = await bcryptjs.hash(password, salt);

    return hash;
};