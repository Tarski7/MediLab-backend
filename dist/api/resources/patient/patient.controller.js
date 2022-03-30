'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _patient = require('./patient.service');

var _patient2 = _interopRequireDefault(_patient);

var _httpStatusCodes = require('http-status-codes');

var _httpStatusCodes2 = _interopRequireDefault(_httpStatusCodes);

var _patient3 = require('./patient.model');

var _patient4 = _interopRequireDefault(_patient3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = {
    create: function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
            var _patientService$valid, value, error, patient;

            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.prev = 0;
                            _patientService$valid = _patient2.default.validateCreateSchema(req.body), value = _patientService$valid.value, error = _patientService$valid.error;

                            if (!(error && error.details)) {
                                _context.next = 4;
                                break;
                            }

                            return _context.abrupt('return', res.status(_httpStatusCodes2.default.BAD_REQUEST).json(error));

                        case 4:
                            _context.next = 6;
                            return _patient4.default.create(value);

                        case 6:
                            patient = _context.sent;
                            return _context.abrupt('return', res.json(patient));

                        case 10:
                            _context.prev = 10;
                            _context.t0 = _context['catch'](0);
                            return _context.abrupt('return', res.status(_httpStatusCodes2.default.INTERNAL_SERVER_ERROR).json(_context.t0));

                        case 13:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this, [[0, 10]]);
        }));

        function create(_x, _x2) {
            return _ref.apply(this, arguments);
        }

        return create;
    }(),
    findAll: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
            var patients;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            _context2.prev = 0;
                            _context2.next = 3;
                            return _patient4.default.find();

                        case 3:
                            patients = _context2.sent;
                            return _context2.abrupt('return', res.json(patients));

                        case 7:
                            _context2.prev = 7;
                            _context2.t0 = _context2['catch'](0);
                            return _context2.abrupt('return', res.status(_httpStatusCodes2.default.INTERNAL_SERVER_ERROR).json(_context2.t0));

                        case 10:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, this, [[0, 7]]);
        }));

        function findAll(_x3, _x4) {
            return _ref2.apply(this, arguments);
        }

        return findAll;
    }(),
    findOne: function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
            var patient;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            _context3.prev = 0;
                            _context3.next = 3;
                            return _patient4.default.findById(req.params.id);

                        case 3:
                            patient = _context3.sent;

                            if (patient) {
                                _context3.next = 6;
                                break;
                            }

                            return _context3.abrupt('return', res.status(_httpStatusCodes2.default.NOT_FOUND).json({ err: 'Patient not found' }));

                        case 6:
                            return _context3.abrupt('return', res.json(patient));

                        case 9:
                            _context3.prev = 9;
                            _context3.t0 = _context3['catch'](0);
                            return _context3.abrupt('return', res.status(_httpStatusCodes2.default.INTERNAL_SERVER_ERROR).json(_context3.t0));

                        case 12:
                        case 'end':
                            return _context3.stop();
                    }
                }
            }, _callee3, this, [[0, 9]]);
        }));

        function findOne(_x5, _x6) {
            return _ref3.apply(this, arguments);
        }

        return findOne;
    }(),
    delete: function () {
        var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
            var patient;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                    switch (_context4.prev = _context4.next) {
                        case 0:
                            _context4.prev = 0;
                            _context4.next = 3;
                            return _patient4.default.findOneAndRemove({ _id: req.params.id });

                        case 3:
                            patient = _context4.sent;

                            if (patient) {
                                _context4.next = 6;
                                break;
                            }

                            return _context4.abrupt('return', res.status(_httpStatusCodes2.default.NOT_FOUND).json({ err: 'Could not delete patient' }));

                        case 6:
                            return _context4.abrupt('return', res.json(patient));

                        case 9:
                            _context4.prev = 9;
                            _context4.t0 = _context4['catch'](0);
                            return _context4.abrupt('return', res.status(_httpStatusCodes2.default.INTERNAL_SERVER_ERROR).json(_context4.t0));

                        case 12:
                        case 'end':
                            return _context4.stop();
                    }
                }
            }, _callee4, this, [[0, 9]]);
        }));

        function _delete(_x7, _x8) {
            return _ref4.apply(this, arguments);
        }

        return _delete;
    }(),
    update: function () {
        var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
            var _patientService$valid2, value, error, patient;

            return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                    switch (_context5.prev = _context5.next) {
                        case 0:
                            _context5.prev = 0;
                            _patientService$valid2 = _patient2.default.validateUpdateSchema(req.body), value = _patientService$valid2.value, error = _patientService$valid2.error;

                            if (!(error && error.details)) {
                                _context5.next = 4;
                                break;
                            }

                            return _context5.abrupt('return', res.status(_httpStatusCodes2.default.BAD_REQUEST).json(error));

                        case 4:
                            _context5.next = 6;
                            return _patient4.default.findOneAndUpdate({ _id: req.params.id }, value, { new: true });

                        case 6:
                            patient = _context5.sent;
                            return _context5.abrupt('return', res.json(patient));

                        case 10:
                            _context5.prev = 10;
                            _context5.t0 = _context5['catch'](0);
                            return _context5.abrupt('return', res.status(_httpStatusCodes2.default.INTERNAL_SERVER_ERROR).json(_context5.t0));

                        case 13:
                        case 'end':
                            return _context5.stop();
                    }
                }
            }, _callee5, this, [[0, 10]]);
        }));

        function update(_x9, _x10) {
            return _ref5.apply(this, arguments);
        }

        return update;
    }()
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL3BhdGllbnQvcGF0aWVudC5jb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbImNyZWF0ZSIsInJlcSIsInJlcyIsInBhdGllbnRTZXJ2aWNlIiwidmFsaWRhdGVDcmVhdGVTY2hlbWEiLCJib2R5IiwidmFsdWUiLCJlcnJvciIsImRldGFpbHMiLCJzdGF0dXMiLCJIdHRwU3RhdHVzIiwiQkFEX1JFUVVFU1QiLCJqc29uIiwiUGF0aWVudCIsInBhdGllbnQiLCJJTlRFUk5BTF9TRVJWRVJfRVJST1IiLCJmaW5kQWxsIiwiZmluZCIsInBhdGllbnRzIiwiZmluZE9uZSIsImZpbmRCeUlkIiwicGFyYW1zIiwiaWQiLCJOT1RfRk9VTkQiLCJlcnIiLCJkZWxldGUiLCJmaW5kT25lQW5kUmVtb3ZlIiwiX2lkIiwidXBkYXRlIiwidmFsaWRhdGVVcGRhdGVTY2hlbWEiLCJmaW5kT25lQW5kVXBkYXRlIiwibmV3Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O2tCQUVlO0FBQ0xBLFVBREs7QUFBQSw0RkFDRUMsR0FERixFQUNPQyxHQURQO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9EQUdzQkMsa0JBQWVDLG9CQUFmLENBQW9DSCxJQUFJSSxJQUF4QyxDQUh0QixFQUdLQyxLQUhMLHlCQUdLQSxLQUhMLEVBR1lDLEtBSFoseUJBR1lBLEtBSFo7O0FBQUEsa0NBS0NBLFNBQVNBLE1BQU1DLE9BTGhCO0FBQUE7QUFBQTtBQUFBOztBQUFBLDZEQU1RTixJQUFJTyxNQUFKLENBQVdDLDBCQUFXQyxXQUF0QixFQUFtQ0MsSUFBbkMsQ0FBd0NMLEtBQXhDLENBTlI7O0FBQUE7QUFBQTtBQUFBLG1DQVNtQk0sa0JBQVFiLE1BQVIsQ0FBZU0sS0FBZixDQVRuQjs7QUFBQTtBQVNHUSxtQ0FUSDtBQUFBLDZEQVVJWixJQUFJVSxJQUFKLENBQVNFLE9BQVQsQ0FWSjs7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Q0gsS0FBSzFCLElBQUlvQixNQUFKLENBQVdDLEVBQWpCLEVBRGtCLEVBRWxCaEIsS0FGa0IsRUFHbEIsRUFBQ3lCLEtBQUssSUFBTixFQUhrQixDQXpEbkI7O0FBQUE7QUF5REdqQixtQ0F6REg7QUFBQSw4REErRElaLElBQUlVLElBQUosQ0FBU0UsT0FBVCxDQS9ESjs7QUFBQTtBQUFBO0FBQUE7QUFBQSw4REFpRUlaLElBQUlPLE1BQUosQ0FBV0MsMEJBQVdLLHFCQUF0QixFQUE2Q0gsSUFBN0MsY0FqRUo7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSxDIiwiZmlsZSI6InBhdGllbnQuY29udHJvbGxlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwYXRpZW50U2VydmljZSBmcm9tIFwiLi9wYXRpZW50LnNlcnZpY2VcIlxyXG5pbXBvcnQgSHR0cFN0YXR1cyBmcm9tICdodHRwLXN0YXR1cy1jb2Rlcyc7XHJcbmltcG9ydCBQYXRpZW50IGZyb20gJy4vcGF0aWVudC5tb2RlbCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBhc3luYyBjcmVhdGUocmVxLCByZXMpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCB7IHZhbHVlLCBlcnJvciB9ID0gcGF0aWVudFNlcnZpY2UudmFsaWRhdGVDcmVhdGVTY2hlbWEocmVxLmJvZHkpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGVycm9yICYmIGVycm9yLmRldGFpbHMpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKEh0dHBTdGF0dXMuQkFEX1JFUVVFU1QpLmpzb24oZXJyb3IpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBwYXRpZW50ID0gYXdhaXQgUGF0aWVudC5jcmVhdGUodmFsdWUpO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzLmpzb24ocGF0aWVudCk7XHJcbiAgICAgICAgfSBjYXRjaChlcnIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoSHR0cFN0YXR1cy5JTlRFUk5BTF9TRVJWRVJfRVJST1IpLmpzb24oZXJyKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGFzeW5jIGZpbmRBbGwocmVxLCByZXMpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBwYXRpZW50cyA9IGF3YWl0IFBhdGllbnQuZmluZCgpO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzLmpzb24ocGF0aWVudHMpO1xyXG4gICAgICAgIH0gY2F0Y2goZXJyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKEh0dHBTdGF0dXMuSU5URVJOQUxfU0VSVkVSX0VSUk9SKS5qc29uKGVycik7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBhc3luYyBmaW5kT25lKHJlcSwgcmVzKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcGF0aWVudCA9IGF3YWl0IFBhdGllbnQuZmluZEJ5SWQocmVxLnBhcmFtcy5pZCk7XHJcbiAgICAgICAgICAgIGlmICghcGF0aWVudCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoSHR0cFN0YXR1cy5OT1RfRk9VTkQpLmpzb24oe2VycjogJ1BhdGllbnQgbm90IGZvdW5kJ30pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiByZXMuanNvbihwYXRpZW50KTtcclxuICAgICAgICB9IGNhdGNoKGVycikge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyhIdHRwU3RhdHVzLklOVEVSTkFMX1NFUlZFUl9FUlJPUikuanNvbihlcnIpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgYXN5bmMgZGVsZXRlKHJlcSwgcmVzKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcGF0aWVudCA9IGF3YWl0IFBhdGllbnQuZmluZE9uZUFuZFJlbW92ZSh7X2lkOiByZXEucGFyYW1zLmlkfSk7XHJcbiAgICAgICAgICAgIGlmICghcGF0aWVudCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoSHR0cFN0YXR1cy5OT1RfRk9VTkQpLmpzb24oe2VycjogJ0NvdWxkIG5vdCBkZWxldGUgcGF0aWVudCd9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcmVzLmpzb24ocGF0aWVudCk7XHJcbiAgICAgICAgfSBjYXRjaChlcnIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoSHR0cFN0YXR1cy5JTlRFUk5BTF9TRVJWRVJfRVJST1IpLmpzb24oZXJyKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGFzeW5jIHVwZGF0ZShyZXEsIHJlcykge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHt2YWx1ZSwgZXJyb3J9ID0gcGF0aWVudFNlcnZpY2UudmFsaWRhdGVVcGRhdGVTY2hlbWEocmVxLmJvZHkpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGVycm9yICYmIGVycm9yLmRldGFpbHMpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKEh0dHBTdGF0dXMuQkFEX1JFUVVFU1QpLmpzb24oZXJyb3IpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBwYXRpZW50ID0gYXdhaXQgUGF0aWVudC5maW5kT25lQW5kVXBkYXRlKFxyXG4gICAgICAgICAgICAgICAge19pZDogcmVxLnBhcmFtcy5pZH0sIFxyXG4gICAgICAgICAgICAgICAgdmFsdWUsIFxyXG4gICAgICAgICAgICAgICAge25ldzogdHJ1ZSB9XHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gcmVzLmpzb24ocGF0aWVudCk7XHJcbiAgICAgICAgfSBjYXRjaChlcnIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoSHR0cFN0YXR1cy5JTlRFUk5BTF9TRVJWRVJfRVJST1IpLmpzb24oZXJyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0=