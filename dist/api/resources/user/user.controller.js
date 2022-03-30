"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _user = require("./user.service");

var _user2 = _interopRequireDefault(_user);

var _httpStatusCodes = require("http-status-codes");

var _httpStatusCodes2 = _interopRequireDefault(_httpStatusCodes);

var _user3 = require("./user.model");

var _user4 = _interopRequireDefault(_user3);

var _bcryptjs = require("bcryptjs");

var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

var _jsonwebtoken = require("jsonwebtoken");

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _development = require("../../../config/env/development");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = {
    signup: function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
            var _userService$validate, error, value, user;

            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.prev = 0;
                            _userService$validate = _user2.default.validateSchema(req.body), error = _userService$validate.error, value = _userService$validate.value;

                            if (!(error && error.details)) {
                                _context.next = 4;
                                break;
                            }

                            return _context.abrupt("return", res.status(_httpStatusCodes2.default.BAD_REQUEST).json(error));

                        case 4:
                            _context.next = 6;
                            return _user4.default.create(value);

                        case 6:
                            user = _context.sent;
                            return _context.abrupt("return", res.json({ success: true, message: 'User created successfully' }));

                        case 10:
                            _context.prev = 10;
                            _context.t0 = _context["catch"](0);

                            console.error(_context.t0);
                            return _context.abrupt("return", res.status(_httpStatusCodes2.default.INTERNAL_SERVER_ERROR).json(_context.t0));

                        case 14:
                        case "end":
                            return _context.stop();
                    }
                }
            }, _callee, this, [[0, 10]]);
        }));

        function signup(_x, _x2) {
            return _ref.apply(this, arguments);
        }

        return signup;
    }(),
    login: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
            var _userService$validate2, error, value, user, matched, token;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            _context2.prev = 0;
                            _userService$validate2 = _user2.default.validateSchema(req.body), error = _userService$validate2.error, value = _userService$validate2.value;

                            if (!(error && error.details)) {
                                _context2.next = 4;
                                break;
                            }

                            return _context2.abrupt("return", res.status(_httpStatusCodes2.default.BAD_REQUEST).json(error));

                        case 4:
                            _context2.next = 6;
                            return _user4.default.findOne({ email: value.email });

                        case 6:
                            user = _context2.sent;

                            if (user) {
                                _context2.next = 9;
                                break;
                            }

                            return _context2.abrupt("return", res.status(_httpStatusCodes2.default.BAD_REQUEST).json({ err: 'Invalid email or password' }));

                        case 9:
                            matched = _bcryptjs2.default.compare(value.password, user.password);

                            if (matched) {
                                _context2.next = 12;
                                break;
                            }

                            return _context2.abrupt("return", res.status(_httpStatusCodes2.default.UNAUTHORIZED).json({ err: 'Invalid credentials' }));

                        case 12:
                            token = _jsonwebtoken2.default.sign({ id: user._id }, _development.devConfig.secret, { expiresIn: '1d' });
                            return _context2.abrupt("return", res.json({ success: true, token: token }));

                        case 16:
                            _context2.prev = 16;
                            _context2.t0 = _context2["catch"](0);

                            console.error(_context2.t0);
                            return _context2.abrupt("return", res.status(_httpStatusCodes2.default.INTERNAL_SERVER_ERROR).json(_context2.t0));

                        case 20:
                        case "end":
                            return _context2.stop();
                    }
                }
            }, _callee2, this, [[0, 16]]);
        }));

        function login(_x3, _x4) {
            return _ref2.apply(this, arguments);
        }

        return login;
    }(),
    test: function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            return _context3.abrupt("return", res.json(req.user));

                        case 1:
                        case "end":
                            return _context3.stop();
                    }
                }
            }, _callee3, this);
        }));

        function test(_x5, _x6) {
            return _ref3.apply(this, arguments);
        }

        return test;
    }()
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL3VzZXIvdXNlci5jb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbInNpZ251cCIsInJlcSIsInJlcyIsInVzZXJTZXJ2aWNlIiwidmFsaWRhdGVTY2hlbWEiLCJib2R5IiwiZXJyb3IiLCJ2YWx1ZSIsImRldGFpbHMiLCJzdGF0dXMiLCJIdHRwU3RhdHVzIiwiQkFEX1JFUVVFU1QiLCJqc29uIiwiVXNlciIsImNyZWF0ZSIsInVzZXIiLCJzdWNjZXNzIiwibWVzc2FnZSIsImNvbnNvbGUiLCJJTlRFUk5BTF9TRVJWRVJfRVJST1IiLCJsb2dpbiIsImZpbmRPbmUiLCJlbWFpbCIsImVyciIsIm1hdGNoZWQiLCJiY3J5cHRqcyIsImNvbXBhcmUiLCJwYXNzd29yZCIsIlVOQVVUSE9SSVpFRCIsInRva2VuIiwiand0Iiwic2lnbiIsImlkIiwiX2lkIiwiZGV2Q29uZmlnIiwic2VjcmV0IiwiZXhwaXJlc0luIiwidGVzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7a0JBRWU7QUFDTEEsVUFESztBQUFBLDRGQUNFQyxHQURGLEVBQ09DLEdBRFA7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0RBR29CQyxlQUFZQyxjQUFaLENBQTJCSCxJQUFJSSxJQUEvQixDQUhwQixFQUdJQyxLQUhKLHlCQUdJQSxLQUhKLEVBR1dDLEtBSFgseUJBR1dBLEtBSFg7O0FBQUEsa0NBSUNELFNBQVNBLE1BQU1FLE9BSmhCO0FBQUE7QUFBQTtBQUFBOztBQUFBLDZEQUtRTixJQUFJTyxNQUFKLENBQVdDLDBCQUFXQyxXQUF0QixFQUFtQ0MsSUFBbkMsQ0FBd0NOLEtBQXhDLENBTFI7O0FBQUE7QUFBQTtBQUFBLG1DQVFnQk8sZUFBS0MsTUFBTCxDQUFZUCxLQUFaLENBUmhCOztBQUFBO0FBUUdRLGdDQVJIO0FBQUEsNkRBVUliLElBQUlVLElBQUosQ0FBUyxFQUFDSSxTQUFTLElBQVYsRUFBZ0JDLFNBQVMsMkJBQXpCLEVBQVQsQ0FWSjs7QUFBQTtBQUFBO0FBQUE7O0FBWUhDLG9DQUFRWixLQUFSO0FBWkcsNkRBYUlKLElBQUlPLE1BQUosQ0FBV0MsMEJBQVdTLHFCQUF0QixFQUE2Q1AsSUFBN0MsYUFiSjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQWlCTFEsU0FqQks7QUFBQSw4RkFpQkNuQixHQWpCRCxFQWlCTUMsR0FqQk47QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscURBbUJvQkMsZUFBWUMsY0FBWixDQUEyQkgsSUFBSUksSUFBL0IsQ0FuQnBCLEVBbUJJQyxLQW5CSiwwQkFtQklBLEtBbkJKLEVBbUJXQyxLQW5CWCwwQkFtQldBLEtBbkJYOztBQUFBLGtDQW9CQ0QsU0FBU0EsTUFBTUUsT0FwQmhCO0FBQUE7QUFBQTtBQUFBOztBQUFBLDhEQXFCUU4sSUFBSU8sTUFBSixDQUFXQywwQkFBV0MsV0FBdEIsRUFBbUNDLElBQW5DLENBQXdDTixLQUF4QyxDQXJCUjs7QUFBQTtBQUFBO0FBQUEsbUNBd0JnQk8sZUFBS1EsT0FBTCxDQUFhLEVBQUNDLE9BQU9mLE1BQU1lLEtBQWQsRUFBYixDQXhCaEI7O0FBQUE7QUF3QkdQLGdDQXhCSDs7QUFBQSxnQ0F5QkVBLElBekJGO0FBQUE7QUFBQTtBQUFBOztBQUFBLDhEQTBCUWIsSUFBSU8sTUFBSixDQUFXQywwQkFBV0MsV0FBdEIsRUFBbUNDLElBQW5DLENBQXdDLEVBQUNXLEtBQUssMkJBQU4sRUFBeEMsQ0ExQlI7O0FBQUE7QUE2QkdDLG1DQTdCSCxHQTZCYUMsbUJBQVNDLE9BQVQsQ0FBaUJuQixNQUFNb0IsUUFBdkIsRUFBaUNaLEtBQUtZLFFBQXRDLENBN0JiOztBQUFBLGdDQThCRUgsT0E5QkY7QUFBQTtBQUFBO0FBQUE7O0FBQUEsOERBK0JRdEIsSUFBSU8sTUFBSixDQUFXQywwQkFBV2tCLFlBQXRCLEVBQW9DaEIsSUFBcEMsQ0FBeUMsRUFBQ1csS0FBSyxxQkFBTixFQUF6QyxDQS9CUjs7QUFBQTtBQWtDR00saUNBbENILEdBa0NXQyx1QkFBSUMsSUFBSixDQUFTLEVBQUNDLElBQUlqQixLQUFLa0IsR0FBVixFQUFULEVBQXlCQyx1QkFBVUMsTUFBbkMsRUFBMkMsRUFBQ0MsV0FBVyxJQUFaLEVBQTNDLENBbENYO0FBQUEsOERBb0NJbEMsSUFBSVUsSUFBSixDQUFTLEVBQUNJLFNBQVMsSUFBVixFQUFnQmEsWUFBaEIsRUFBVCxDQXBDSjs7QUFBQTtBQUFBO0FBQUE7O0FBc0NIWCxvQ0FBUVosS0FBUjtBQXRDRyw4REF1Q0lKLElBQUlPLE1BQUosQ0FBV0MsMEJBQVdTLHFCQUF0QixFQUE2Q1AsSUFBN0MsY0F2Q0o7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUEyQ0x5QixRQTNDSztBQUFBLDhGQTJDQXBDLEdBM0NBLEVBMkNLQyxHQTNDTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOERBNENBQSxJQUFJVSxJQUFKLENBQVNYLElBQUljLElBQWIsQ0E1Q0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSxDIiwiZmlsZSI6InVzZXIuY29udHJvbGxlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1c2VyU2VydmljZSBmcm9tIFwiLi91c2VyLnNlcnZpY2VcIlxyXG5pbXBvcnQgSHR0cFN0YXR1cyBmcm9tICdodHRwLXN0YXR1cy1jb2Rlcyc7XHJcbmltcG9ydCBVc2VyIGZyb20gXCIuL3VzZXIubW9kZWxcIjtcclxuaW1wb3J0IGJjcnlwdGpzIGZyb20gJ2JjcnlwdGpzJztcclxuaW1wb3J0IGp3dCBmcm9tICdqc29ud2VidG9rZW4nO1xyXG5pbXBvcnQgeyBkZXZDb25maWcgfSBmcm9tIFwiLi4vLi4vLi4vY29uZmlnL2Vudi9kZXZlbG9wbWVudFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgYXN5bmMgc2lnbnVwKHJlcSwgcmVzKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3Qge2Vycm9yLCB2YWx1ZX0gPSB1c2VyU2VydmljZS52YWxpZGF0ZVNjaGVtYShyZXEuYm9keSk7XHJcbiAgICAgICAgICAgIGlmIChlcnJvciAmJiBlcnJvci5kZXRhaWxzKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyhIdHRwU3RhdHVzLkJBRF9SRVFVRVNUKS5qc29uKGVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXIuY3JlYXRlKHZhbHVlKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiByZXMuanNvbih7c3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogJ1VzZXIgY3JlYXRlZCBzdWNjZXNzZnVsbHknfSk7XHJcbiAgICAgICAgfSBjYXRjaChlcnIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyhIdHRwU3RhdHVzLklOVEVSTkFMX1NFUlZFUl9FUlJPUikuanNvbihlcnIpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgYXN5bmMgbG9naW4ocmVxLCByZXMpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCB7ZXJyb3IsIHZhbHVlfSA9IHVzZXJTZXJ2aWNlLnZhbGlkYXRlU2NoZW1hKHJlcS5ib2R5KTtcclxuICAgICAgICAgICAgaWYgKGVycm9yICYmIGVycm9yLmRldGFpbHMpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKEh0dHBTdGF0dXMuQkFEX1JFUVVFU1QpLmpzb24oZXJyb3IpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgVXNlci5maW5kT25lKHtlbWFpbDogdmFsdWUuZW1haWx9KTtcclxuICAgICAgICAgICAgaWYgKCF1c2VyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyhIdHRwU3RhdHVzLkJBRF9SRVFVRVNUKS5qc29uKHtlcnI6ICdJbnZhbGlkIGVtYWlsIG9yIHBhc3N3b3JkJ30pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBtYXRjaGVkID0gYmNyeXB0anMuY29tcGFyZSh2YWx1ZS5wYXNzd29yZCwgdXNlci5wYXNzd29yZCk7XHJcbiAgICAgICAgICAgIGlmICghbWF0Y2hlZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoSHR0cFN0YXR1cy5VTkFVVEhPUklaRUQpLmpzb24oe2VycjogJ0ludmFsaWQgY3JlZGVudGlhbHMnfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHRva2VuID0gand0LnNpZ24oe2lkOiB1c2VyLl9pZH0sIGRldkNvbmZpZy5zZWNyZXQsIHtleHBpcmVzSW46ICcxZCd9KTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiByZXMuanNvbih7c3VjY2VzczogdHJ1ZSwgdG9rZW59KTtcclxuICAgICAgICB9IGNhdGNoKGVycikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKEh0dHBTdGF0dXMuSU5URVJOQUxfU0VSVkVSX0VSUk9SKS5qc29uKGVycik7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBhc3luYyB0ZXN0KHJlcSwgcmVzKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKHJlcS51c2VyKTtcclxuICAgIH1cclxufSJdfQ==