'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _joi = require('joi');

var _joi2 = _interopRequireDefault(_joi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    validateSchema: function validateSchema(body) {
        var schema = _joi2.default.object().keys({
            email: _joi2.default.string().email().required(),
            password: _joi2.default.string().required()
        });

        var _schema$validate = schema.validate(body),
            error = _schema$validate.error,
            value = _schema$validate.value;

        if (error && error.details) {
            return { error: error };
        }

        return { value: value };
    }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL3VzZXIvdXNlci5zZXJ2aWNlLmpzIl0sIm5hbWVzIjpbInZhbGlkYXRlU2NoZW1hIiwiYm9keSIsInNjaGVtYSIsIkpvaSIsIm9iamVjdCIsImtleXMiLCJlbWFpbCIsInN0cmluZyIsInJlcXVpcmVkIiwicGFzc3dvcmQiLCJ2YWxpZGF0ZSIsImVycm9yIiwidmFsdWUiLCJkZXRhaWxzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7Ozs7O2tCQUVlO0FBQ1hBLGtCQURXLDBCQUNJQyxJQURKLEVBQ1U7QUFDakIsWUFBTUMsU0FBU0MsY0FBSUMsTUFBSixHQUFhQyxJQUFiLENBQWtCO0FBQzdCQyxtQkFBT0gsY0FBSUksTUFBSixHQUFhRCxLQUFiLEdBQXFCRSxRQUFyQixFQURzQjtBQUU3QkMsc0JBQVVOLGNBQUlJLE1BQUosR0FBYUMsUUFBYjtBQUZtQixTQUFsQixDQUFmOztBQURpQiwrQkFNUU4sT0FBT1EsUUFBUCxDQUFnQlQsSUFBaEIsQ0FOUjtBQUFBLFlBTVRVLEtBTlMsb0JBTVRBLEtBTlM7QUFBQSxZQU1GQyxLQU5FLG9CQU1GQSxLQU5FOztBQU9qQixZQUFJRCxTQUFTQSxNQUFNRSxPQUFuQixFQUE0QjtBQUN4QixtQkFBTyxFQUFFRixZQUFGLEVBQVA7QUFDSDs7QUFFRCxlQUFPLEVBQUVDLFlBQUYsRUFBUDtBQUNIO0FBYlUsQyIsImZpbGUiOiJ1c2VyLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSm9pIGZyb20gJ2pvaSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICB2YWxpZGF0ZVNjaGVtYShib2R5KSB7XHJcbiAgICAgICAgY29uc3Qgc2NoZW1hID0gSm9pLm9iamVjdCgpLmtleXMoe1xyXG4gICAgICAgICAgICBlbWFpbDogSm9pLnN0cmluZygpLmVtYWlsKCkucmVxdWlyZWQoKSxcclxuICAgICAgICAgICAgcGFzc3dvcmQ6IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHsgZXJyb3IsIHZhbHVlIH0gPSBzY2hlbWEudmFsaWRhdGUoYm9keSk7XHJcbiAgICAgICAgaWYgKGVycm9yICYmIGVycm9yLmRldGFpbHMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgZXJyb3IgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB7IHZhbHVlIH07XHJcbiAgICB9XHJcbn0iXX0=