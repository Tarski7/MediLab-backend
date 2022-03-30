'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setGlobalMiddleware = undefined;

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

var _passportJwt = require('./passport-jwt');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var setGlobalMiddleware = exports.setGlobalMiddleware = function setGlobalMiddleware(app) {
    app.use(_express2.default.json());
    app.use(_express2.default.urlencoded({ extended: true }));
    app.use((0, _cors2.default)());
    app.use((0, _morgan2.default)('dev'));
    app.use(_passport2.default.initialize());
    (0, _passportJwt.configureJWTStrategy)();
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcGkvbWlkZGxld2FyZXMvZ2xvYmFsLW1pZGRsZXdhcmUuanMiXSwibmFtZXMiOlsic2V0R2xvYmFsTWlkZGxld2FyZSIsImFwcCIsInVzZSIsImV4cHJlc3MiLCJqc29uIiwidXJsZW5jb2RlZCIsImV4dGVuZGVkIiwicGFzc3BvcnQiLCJpbml0aWFsaXplIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVPLElBQU1BLG9EQUFzQixTQUF0QkEsbUJBQXNCLE1BQU87QUFDdENDLFFBQUlDLEdBQUosQ0FBUUMsa0JBQVFDLElBQVIsRUFBUjtBQUNBSCxRQUFJQyxHQUFKLENBQVFDLGtCQUFRRSxVQUFSLENBQW1CLEVBQUNDLFVBQVUsSUFBWCxFQUFuQixDQUFSO0FBQ0FMLFFBQUlDLEdBQUosQ0FBUSxxQkFBUjtBQUNBRCxRQUFJQyxHQUFKLENBQVEsc0JBQU8sS0FBUCxDQUFSO0FBQ0FELFFBQUlDLEdBQUosQ0FBUUssbUJBQVNDLFVBQVQsRUFBUjtBQUNBO0FBQ0gsQ0FQTSIsImZpbGUiOiJnbG9iYWwtbWlkZGxld2FyZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xyXG5pbXBvcnQgbG9nZ2VyIGZyb20gJ21vcmdhbic7XHJcbmltcG9ydCBjb3JzIGZyb20gJ2NvcnMnO1xyXG5pbXBvcnQgcGFzc3BvcnQgZnJvbSAncGFzc3BvcnQnO1xyXG5pbXBvcnQgeyBjb25maWd1cmVKV1RTdHJhdGVneSB9IGZyb20gJy4vcGFzc3BvcnQtand0JztcclxuXHJcbmV4cG9ydCBjb25zdCBzZXRHbG9iYWxNaWRkbGV3YXJlID0gYXBwID0+IHtcclxuICAgIGFwcC51c2UoZXhwcmVzcy5qc29uKCkpO1xyXG4gICAgYXBwLnVzZShleHByZXNzLnVybGVuY29kZWQoe2V4dGVuZGVkOiB0cnVlfSkpO1xyXG4gICAgYXBwLnVzZShjb3JzKCkpO1xyXG4gICAgYXBwLnVzZShsb2dnZXIoJ2RldicpKTtcclxuICAgIGFwcC51c2UocGFzc3BvcnQuaW5pdGlhbGl6ZSgpKTtcclxuICAgIGNvbmZpZ3VyZUpXVFN0cmF0ZWd5KCk7XHJcbn0iXX0=