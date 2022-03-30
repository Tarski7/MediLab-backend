"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userRouter = undefined;

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _user = require("./user.controller");

var _user2 = _interopRequireDefault(_user);

var _passport = require("passport");

var _passport2 = _interopRequireDefault(_passport);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var userRouter = exports.userRouter = _express2.default.Router();
userRouter.post('/signup', _user2.default.signup);
userRouter.post('/login', _user2.default.login);
userRouter.post('/test', _passport2.default.authenticate('jwt', { session: false }), _user2.default.test);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL3VzZXIvdXNlci5yb3V0ZXIuanMiXSwibmFtZXMiOlsidXNlclJvdXRlciIsImV4cHJlc3MiLCJSb3V0ZXIiLCJwb3N0IiwidXNlckNvbnRyb2xsZXIiLCJzaWdudXAiLCJsb2dpbiIsInBhc3Nwb3J0IiwiYXV0aGVudGljYXRlIiwic2Vzc2lvbiIsInRlc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVPLElBQU1BLGtDQUFhQyxrQkFBUUMsTUFBUixFQUFuQjtBQUNQRixXQUFXRyxJQUFYLENBQWdCLFNBQWhCLEVBQTJCQyxlQUFlQyxNQUExQztBQUNBTCxXQUFXRyxJQUFYLENBQWdCLFFBQWhCLEVBQTBCQyxlQUFlRSxLQUF6QztBQUNBTixXQUFXRyxJQUFYLENBQWdCLE9BQWhCLEVBQXlCSSxtQkFBU0MsWUFBVCxDQUFzQixLQUF0QixFQUE2QixFQUFDQyxTQUFTLEtBQVYsRUFBN0IsQ0FBekIsRUFBeUVMLGVBQWVNLElBQXhGIiwiZmlsZSI6InVzZXIucm91dGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGV4cHJlc3MgZnJvbSBcImV4cHJlc3NcIjtcclxuaW1wb3J0IHVzZXJDb250cm9sbGVyIGZyb20gXCIuL3VzZXIuY29udHJvbGxlclwiO1xyXG5pbXBvcnQgcGFzc3BvcnQgZnJvbSAncGFzc3BvcnQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZXJSb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xyXG51c2VyUm91dGVyLnBvc3QoJy9zaWdudXAnLCB1c2VyQ29udHJvbGxlci5zaWdudXApO1xyXG51c2VyUm91dGVyLnBvc3QoJy9sb2dpbicsIHVzZXJDb250cm9sbGVyLmxvZ2luKTtcclxudXNlclJvdXRlci5wb3N0KCcvdGVzdCcsIHBhc3Nwb3J0LmF1dGhlbnRpY2F0ZSgnand0Jywge3Nlc3Npb246IGZhbHNlfSksIHVzZXJDb250cm9sbGVyLnRlc3QpOyJdfQ==