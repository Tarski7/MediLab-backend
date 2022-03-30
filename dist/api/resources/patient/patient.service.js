'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _joi = require('joi');

var _joi2 = _interopRequireDefault(_joi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    validateCreateSchema: function validateCreateSchema(body) {
        var schema = _joi2.default.object().keys({
            firstName: _joi2.default.string().required(),
            lastName: _joi2.default.string().required(),
            dateOfBirth: _joi2.default.date().required(),
            pesel: _joi2.default.number().required(),
            email: _joi2.default.string().email().required(),
            phoneNo: _joi2.default.number().required()
        });

        var _schema$validate = schema.validate(body),
            error = _schema$validate.error,
            value = _schema$validate.value;

        if (error && error.details) {
            return { error: error };
        }

        return { value: value };
    },
    validateUpdateSchema: function validateUpdateSchema(body) {
        var schema = _joi2.default.object().keys({
            firstName: _joi2.default.string().optional(),
            lastName: _joi2.default.string().optional(),
            dateOfBirth: _joi2.default.date().optional(),
            pesel: _joi2.default.number().optional(),
            email: _joi2.default.string().email().optional(),
            phoneNo: _joi2.default.number().optional()
        });

        var _schema$validate2 = schema.validate(body),
            error = _schema$validate2.error,
            value = _schema$validate2.value;

        if (error && error.details) {
            return { error: error };
        }

        return { value: value };
    }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL3BhdGllbnQvcGF0aWVudC5zZXJ2aWNlLmpzIl0sIm5hbWVzIjpbInZhbGlkYXRlQ3JlYXRlU2NoZW1hIiwiYm9keSIsInNjaGVtYSIsIkpvaSIsIm9iamVjdCIsImtleXMiLCJmaXJzdE5hbWUiLCJzdHJpbmciLCJyZXF1aXJlZCIsImxhc3ROYW1lIiwiZGF0ZU9mQmlydGgiLCJkYXRlIiwicGVzZWwiLCJudW1iZXIiLCJlbWFpbCIsInBob25lTm8iLCJ2YWxpZGF0ZSIsImVycm9yIiwidmFsdWUiLCJkZXRhaWxzIiwidmFsaWRhdGVVcGRhdGVTY2hlbWEiLCJvcHRpb25hbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7OztrQkFFZTtBQUNYQSx3QkFEVyxnQ0FDVUMsSUFEVixFQUNnQjtBQUN2QixZQUFNQyxTQUFTQyxjQUFJQyxNQUFKLEdBQWFDLElBQWIsQ0FBa0I7QUFDN0JDLHVCQUFXSCxjQUFJSSxNQUFKLEdBQWFDLFFBQWIsRUFEa0I7QUFFN0JDLHNCQUFVTixjQUFJSSxNQUFKLEdBQWFDLFFBQWIsRUFGbUI7QUFHN0JFLHlCQUFhUCxjQUFJUSxJQUFKLEdBQVdILFFBQVgsRUFIZ0I7QUFJN0JJLG1CQUFPVCxjQUFJVSxNQUFKLEdBQWFMLFFBQWIsRUFKc0I7QUFLN0JNLG1CQUFPWCxjQUFJSSxNQUFKLEdBQWFPLEtBQWIsR0FBcUJOLFFBQXJCLEVBTHNCO0FBTTdCTyxxQkFBU1osY0FBSVUsTUFBSixHQUFhTCxRQUFiO0FBTm9CLFNBQWxCLENBQWY7O0FBRHVCLCtCQVVFTixPQUFPYyxRQUFQLENBQWdCZixJQUFoQixDQVZGO0FBQUEsWUFVZmdCLEtBVmUsb0JBVWZBLEtBVmU7QUFBQSxZQVVSQyxLQVZRLG9CQVVSQSxLQVZROztBQVd2QixZQUFJRCxTQUFTQSxNQUFNRSxPQUFuQixFQUE0QjtBQUN4QixtQkFBTyxFQUFFRixZQUFGLEVBQVA7QUFDSDs7QUFFRCxlQUFPLEVBQUVDLFlBQUYsRUFBUDtBQUNILEtBakJVO0FBbUJYRSx3QkFuQlcsZ0NBbUJVbkIsSUFuQlYsRUFtQmdCO0FBQ3ZCLFlBQU1DLFNBQVNDLGNBQUlDLE1BQUosR0FBYUMsSUFBYixDQUFrQjtBQUM3QkMsdUJBQVdILGNBQUlJLE1BQUosR0FBYWMsUUFBYixFQURrQjtBQUU3Qlosc0JBQVVOLGNBQUlJLE1BQUosR0FBYWMsUUFBYixFQUZtQjtBQUc3QlgseUJBQWFQLGNBQUlRLElBQUosR0FBV1UsUUFBWCxFQUhnQjtBQUk3QlQsbUJBQU9ULGNBQUlVLE1BQUosR0FBYVEsUUFBYixFQUpzQjtBQUs3QlAsbUJBQU9YLGNBQUlJLE1BQUosR0FBYU8sS0FBYixHQUFxQk8sUUFBckIsRUFMc0I7QUFNN0JOLHFCQUFTWixjQUFJVSxNQUFKLEdBQWFRLFFBQWI7QUFOb0IsU0FBbEIsQ0FBZjs7QUFEdUIsZ0NBVUVuQixPQUFPYyxRQUFQLENBQWdCZixJQUFoQixDQVZGO0FBQUEsWUFVZmdCLEtBVmUscUJBVWZBLEtBVmU7QUFBQSxZQVVSQyxLQVZRLHFCQVVSQSxLQVZROztBQVd2QixZQUFJRCxTQUFTQSxNQUFNRSxPQUFuQixFQUE0QjtBQUN4QixtQkFBTyxFQUFFRixZQUFGLEVBQVA7QUFDSDs7QUFFRCxlQUFPLEVBQUVDLFlBQUYsRUFBUDtBQUNIO0FBbkNVLEMiLCJmaWxlIjoicGF0aWVudC5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEpvaSBmcm9tICdqb2knO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgdmFsaWRhdGVDcmVhdGVTY2hlbWEoYm9keSkge1xyXG4gICAgICAgIGNvbnN0IHNjaGVtYSA9IEpvaS5vYmplY3QoKS5rZXlzKHtcclxuICAgICAgICAgICAgZmlyc3ROYW1lOiBKb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcclxuICAgICAgICAgICAgbGFzdE5hbWU6IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxyXG4gICAgICAgICAgICBkYXRlT2ZCaXJ0aDogSm9pLmRhdGUoKS5yZXF1aXJlZCgpLFxyXG4gICAgICAgICAgICBwZXNlbDogSm9pLm51bWJlcigpLnJlcXVpcmVkKCksXHJcbiAgICAgICAgICAgIGVtYWlsOiBKb2kuc3RyaW5nKCkuZW1haWwoKS5yZXF1aXJlZCgpLFxyXG4gICAgICAgICAgICBwaG9uZU5vOiBKb2kubnVtYmVyKCkucmVxdWlyZWQoKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zdCB7IGVycm9yLCB2YWx1ZSB9ID0gc2NoZW1hLnZhbGlkYXRlKGJvZHkpO1xyXG4gICAgICAgIGlmIChlcnJvciAmJiBlcnJvci5kZXRhaWxzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7IGVycm9yIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4geyB2YWx1ZSB9O1xyXG4gICAgfSxcclxuXHJcbiAgICB2YWxpZGF0ZVVwZGF0ZVNjaGVtYShib2R5KSB7XHJcbiAgICAgICAgY29uc3Qgc2NoZW1hID0gSm9pLm9iamVjdCgpLmtleXMoe1xyXG4gICAgICAgICAgICBmaXJzdE5hbWU6IEpvaS5zdHJpbmcoKS5vcHRpb25hbCgpLFxyXG4gICAgICAgICAgICBsYXN0TmFtZTogSm9pLnN0cmluZygpLm9wdGlvbmFsKCksXHJcbiAgICAgICAgICAgIGRhdGVPZkJpcnRoOiBKb2kuZGF0ZSgpLm9wdGlvbmFsKCksXHJcbiAgICAgICAgICAgIHBlc2VsOiBKb2kubnVtYmVyKCkub3B0aW9uYWwoKSxcclxuICAgICAgICAgICAgZW1haWw6IEpvaS5zdHJpbmcoKS5lbWFpbCgpLm9wdGlvbmFsKCksXHJcbiAgICAgICAgICAgIHBob25lTm86IEpvaS5udW1iZXIoKS5vcHRpb25hbCgpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHsgZXJyb3IsIHZhbHVlIH0gPSBzY2hlbWEudmFsaWRhdGUoYm9keSk7XHJcbiAgICAgICAgaWYgKGVycm9yICYmIGVycm9yLmRldGFpbHMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgZXJyb3IgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB7IHZhbHVlIH07XHJcbiAgICB9XHJcbn0iXX0=