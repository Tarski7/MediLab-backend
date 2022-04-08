import passport from 'passport';
import GithubStrategy from 'passport-github';
import { devConfig } from '../../config/env/development';
import User from '../resources/user/user.model';

export const configureGithubStrategy = () => {
    passport.use(
        new GithubStrategy.Strategy(
        {
            clientID: devConfig.github.clientId,
            clientSecret: devConfig.github.clientSecret,
            callbackURL: devConfig.github.callbackURL
        },
        async (accessToken, refreshToken, profile, done) => {
            try {
                console.log('accessToken ', accessToken);
                console.log('refreshToken ', refreshToken);
                console.log('profile ', profile);
                
                const user = await User.findOne({'github.id': profile.id});
                if (user) {
                    return done(null, user);
                }
                
                const newUser = new User({});
                newUser.github.id = profile.id;
                newUser.github.token = accessToken;
                newUser.github.displayName = profile.displayName;
                newUser.github.email = profile.emails[0].value;
                await newUser.save();
                
                done(null, newUser);
            }
            catch(err) {
                console.error(err);
                return done(err);
            }
        }
        )
    );
}