'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.configureJWTStrategy = undefined;

var _passportJwt = require('passport-jwt');

var _passportJwt2 = _interopRequireDefault(_passportJwt);

var _development = require('../../config/env/development');

var _user = require('../resources/user/user.model');

var _user2 = _interopRequireDefault(_user);

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var configureJWTStrategy = exports.configureJWTStrategy = function configureJWTStrategy() {
    var opts = {};
    opts.jwtFromRequest = _passportJwt2.default.ExtractJwt.fromAuthHeaderAsBearerToken();
    opts.secretOrKey = _development.devConfig.secret;
    _passport2.default.use(new _passportJwt2.default.Strategy(opts, function (payload, done) {
        _user2.default.findOne({ _id: payload.id }, function (err, user) {
            if (err) {
                return done(err, false);
            }
            if (user) {
                return done(null, user);
            } else {
                return done(null, false);
                // or you could create a new account
            }
        });
    }));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcGkvbWlkZGxld2FyZXMvcGFzc3BvcnQtand0LmpzIl0sIm5hbWVzIjpbImNvbmZpZ3VyZUpXVFN0cmF0ZWd5Iiwib3B0cyIsImp3dEZyb21SZXF1ZXN0IiwiUGFzc3BvcnRKV1QiLCJFeHRyYWN0Snd0IiwiZnJvbUF1dGhIZWFkZXJBc0JlYXJlclRva2VuIiwic2VjcmV0T3JLZXkiLCJkZXZDb25maWciLCJzZWNyZXQiLCJwYXNzcG9ydCIsInVzZSIsIlN0cmF0ZWd5IiwicGF5bG9hZCIsImRvbmUiLCJVc2VyIiwiZmluZE9uZSIsIl9pZCIsImlkIiwiZXJyIiwidXNlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRU8sSUFBTUEsc0RBQXVCLFNBQXZCQSxvQkFBdUIsR0FBTTtBQUN0QyxRQUFJQyxPQUFPLEVBQVg7QUFDQUEsU0FBS0MsY0FBTCxHQUFzQkMsc0JBQVlDLFVBQVosQ0FBdUJDLDJCQUF2QixFQUF0QjtBQUNBSixTQUFLSyxXQUFMLEdBQW1CQyx1QkFBVUMsTUFBN0I7QUFDQUMsdUJBQVNDLEdBQVQsQ0FBYSxJQUFJUCxzQkFBWVEsUUFBaEIsQ0FBeUJWLElBQXpCLEVBQStCLFVBQVNXLE9BQVQsRUFBa0JDLElBQWxCLEVBQXdCO0FBQ2hFQyx1QkFBS0MsT0FBTCxDQUFhLEVBQUNDLEtBQUtKLFFBQVFLLEVBQWQsRUFBYixFQUFnQyxVQUFTQyxHQUFULEVBQWNDLElBQWQsRUFBb0I7QUFDaEQsZ0JBQUlELEdBQUosRUFBUztBQUNMLHVCQUFPTCxLQUFLSyxHQUFMLEVBQVUsS0FBVixDQUFQO0FBQ0g7QUFDRCxnQkFBSUMsSUFBSixFQUFVO0FBQ04sdUJBQU9OLEtBQUssSUFBTCxFQUFXTSxJQUFYLENBQVA7QUFDSCxhQUZELE1BRU87QUFDSCx1QkFBT04sS0FBSyxJQUFMLEVBQVcsS0FBWCxDQUFQO0FBQ0E7QUFDSDtBQUNKLFNBVkQ7QUFXSCxLQVpZLENBQWI7QUFhSCxDQWpCTSIsImZpbGUiOiJwYXNzcG9ydC1qd3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGFzc3BvcnRKV1QgZnJvbSAncGFzc3BvcnQtand0JztcclxuaW1wb3J0IHsgZGV2Q29uZmlnIH0gZnJvbSAnLi4vLi4vY29uZmlnL2Vudi9kZXZlbG9wbWVudCc7XHJcbmltcG9ydCBVc2VyIGZyb20gJy4uL3Jlc291cmNlcy91c2VyL3VzZXIubW9kZWwnO1xyXG5pbXBvcnQgcGFzc3BvcnQgZnJvbSAncGFzc3BvcnQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNvbmZpZ3VyZUpXVFN0cmF0ZWd5ID0gKCkgPT4ge1xyXG4gICAgbGV0IG9wdHMgPSB7fVxyXG4gICAgb3B0cy5qd3RGcm9tUmVxdWVzdCA9IFBhc3Nwb3J0SldULkV4dHJhY3RKd3QuZnJvbUF1dGhIZWFkZXJBc0JlYXJlclRva2VuKCk7XHJcbiAgICBvcHRzLnNlY3JldE9yS2V5ID0gZGV2Q29uZmlnLnNlY3JldDtcclxuICAgIHBhc3Nwb3J0LnVzZShuZXcgUGFzc3BvcnRKV1QuU3RyYXRlZ3kob3B0cywgZnVuY3Rpb24ocGF5bG9hZCwgZG9uZSkge1xyXG4gICAgICAgIFVzZXIuZmluZE9uZSh7X2lkOiBwYXlsb2FkLmlkfSwgZnVuY3Rpb24oZXJyLCB1c2VyKSB7XHJcbiAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBkb25lKGVyciwgZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh1c2VyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZG9uZShudWxsLCB1c2VyKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBkb25lKG51bGwsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIC8vIG9yIHlvdSBjb3VsZCBjcmVhdGUgYSBuZXcgYWNjb3VudFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KSk7XHJcbn0iXX0=