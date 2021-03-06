import PassportJWT from 'passport-jwt';
import { devConfig } from '../../config/env/development';
import User from '../resources/user/user.model';
import passport from 'passport';

export const configureJWTStrategy = () => {
    let opts = {}
    opts.jwtFromRequest = PassportJWT.ExtractJwt.fromAuthHeaderAsBearerToken();
    opts.secretOrKey = devConfig.secret;
    passport.use(new PassportJWT.Strategy(opts, function(payload, done) {
        User.findOne({_id: payload.id}, function(err, user) {
            if (err) {
                return done(err, false);
            }
            if (user) {
                return done(null, user);
            } else {
                return done(null, false);
            }
        });
    }));
}