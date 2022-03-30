'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _bcryptjs = require('bcryptjs');

var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var Schema = _mongoose2.default.Schema;


var UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

UserSchema.pre('save', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var salt, hash;
    return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    if (!(this.isModified('password') || this.isNew)) {
                        _context.next = 8;
                        break;
                    }

                    _context.next = 3;
                    return _bcryptjs2.default.genSalt();

                case 3:
                    salt = _context.sent;
                    _context.next = 6;
                    return _bcryptjs2.default.hash(this.password, salt);

                case 6:
                    hash = _context.sent;

                    this.password = hash;

                case 8:
                case 'end':
                    return _context.stop();
            }
        }
    }, _callee, this);
})));

exports.default = _mongoose2.default.model('User', UserSchema);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL3VzZXIvdXNlci5tb2RlbC5qcyJdLCJuYW1lcyI6WyJTY2hlbWEiLCJtb25nb29zZSIsIlVzZXJTY2hlbWEiLCJlbWFpbCIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsImxvd2VyY2FzZSIsInVuaXF1ZSIsInBhc3N3b3JkIiwicHJlIiwiaXNNb2RpZmllZCIsImlzTmV3IiwiYmNyeXB0anMiLCJnZW5TYWx0Iiwic2FsdCIsImhhc2giLCJtb2RlbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7SUFFUUEsTSxHQUFXQyxrQixDQUFYRCxNOzs7QUFFUixJQUFNRSxhQUFhLElBQUlGLE1BQUosQ0FBVztBQUMxQkcsV0FBTztBQUNIQyxjQUFNQyxNQURIO0FBRUhDLGtCQUFVLElBRlA7QUFHSEMsbUJBQVcsSUFIUjtBQUlIQyxnQkFBUTtBQUpMLEtBRG1CO0FBTzFCQyxjQUFVO0FBQ05MLGNBQU1DLE1BREE7QUFFTkMsa0JBQVU7QUFGSjtBQVBnQixDQUFYLENBQW5COztBQWFBSixXQUFXUSxHQUFYLENBQWUsTUFBZiwwREFBdUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBQ2YsS0FBS0MsVUFBTCxDQUFnQixVQUFoQixLQUErQixLQUFLQyxLQURyQjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLDJCQUVJQyxtQkFBU0MsT0FBVCxFQUZKOztBQUFBO0FBRVRDLHdCQUZTO0FBQUE7QUFBQSwyQkFHSUYsbUJBQVNHLElBQVQsQ0FBYyxLQUFLUCxRQUFuQixFQUE2Qk0sSUFBN0IsQ0FISjs7QUFBQTtBQUdUQyx3QkFIUzs7QUFJZix5QkFBS1AsUUFBTCxHQUFnQk8sSUFBaEI7O0FBSmU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FBdkI7O2tCQVFlZixtQkFBU2dCLEtBQVQsQ0FBZSxNQUFmLEVBQXVCZixVQUF2QixDIiwiZmlsZSI6InVzZXIubW9kZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XHJcbmltcG9ydCBiY3J5cHRqcyBmcm9tICdiY3J5cHRqcyc7XHJcblxyXG5jb25zdCB7IFNjaGVtYSB9ID0gbW9uZ29vc2U7XHJcblxyXG5jb25zdCBVc2VyU2NoZW1hID0gbmV3IFNjaGVtYSh7XHJcbiAgICBlbWFpbDoge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICBsb3dlcmNhc2U6IHRydWUsXHJcbiAgICAgICAgdW5pcXVlOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgcGFzc3dvcmQ6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZWQ6IHRydWVcclxuICAgIH0sXHJcbn0pO1xyXG5cclxuVXNlclNjaGVtYS5wcmUoJ3NhdmUnLCBhc3luYyBmdW5jdGlvbigpIHtcclxuICAgIGlmICh0aGlzLmlzTW9kaWZpZWQoJ3Bhc3N3b3JkJykgfHwgdGhpcy5pc05ldykge1xyXG4gICAgICAgIGNvbnN0IHNhbHQgPSBhd2FpdCBiY3J5cHRqcy5nZW5TYWx0KCk7XHJcbiAgICAgICAgY29uc3QgaGFzaCA9IGF3YWl0IGJjcnlwdGpzLmhhc2godGhpcy5wYXNzd29yZCwgc2FsdCk7XHJcbiAgICAgICAgdGhpcy5wYXNzd29yZCA9IGhhc2g7XHJcbiAgICB9XHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBtb25nb29zZS5tb2RlbCgnVXNlcicsIFVzZXJTY2hlbWEpOyJdfQ==