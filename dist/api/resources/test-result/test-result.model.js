'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _mongoosePaginate = require('mongoose-paginate');

var _mongoosePaginate2 = _interopRequireDefault(_mongoosePaginate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;


var TestResultSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String
    },
    patient: {
        ref: 'Patient',
        type: Schema.Types.ObjectId,
        required: true
    }
});

TestResultSchema.plugin(_mongoosePaginate2.default);

exports.default = _mongoose2.default.model('TestResult', TestResultSchema);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL3Rlc3QtcmVzdWx0L3Rlc3QtcmVzdWx0Lm1vZGVsLmpzIl0sIm5hbWVzIjpbIlNjaGVtYSIsIm1vbmdvb3NlIiwiVGVzdFJlc3VsdFNjaGVtYSIsIm5hbWUiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJkYXRlIiwiRGF0ZSIsInByaWNlIiwiTnVtYmVyIiwiZGVzY3JpcHRpb24iLCJwYXRpZW50IiwicmVmIiwiVHlwZXMiLCJPYmplY3RJZCIsInBsdWdpbiIsIm1vbmdvb3NlUGFnaW5hdGUiLCJtb2RlbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7O0lBRVFBLE0sR0FBV0Msa0IsQ0FBWEQsTTs7O0FBRVIsSUFBTUUsbUJBQW1CLElBQUlGLE1BQUosQ0FBVztBQUNoQ0csVUFBTTtBQUNGQyxjQUFNQyxNQURKO0FBRUZDLGtCQUFVO0FBRlIsS0FEMEI7QUFLaENDLFVBQU07QUFDRkgsY0FBTUksSUFESjtBQUVGRixrQkFBVTtBQUZSLEtBTDBCO0FBU2hDRyxXQUFPO0FBQ0hMLGNBQU1NLE1BREg7QUFFSEosa0JBQVU7QUFGUCxLQVR5QjtBQWFoQ0ssaUJBQWE7QUFDVFAsY0FBTUM7QUFERyxLQWJtQjtBQWdCaENPLGFBQVM7QUFDTEMsYUFBSyxTQURBO0FBRUxULGNBQU1KLE9BQU9jLEtBQVAsQ0FBYUMsUUFGZDtBQUdMVCxrQkFBVTtBQUhMO0FBaEJ1QixDQUFYLENBQXpCOztBQXVCQUosaUJBQWlCYyxNQUFqQixDQUF3QkMsMEJBQXhCOztrQkFFZWhCLG1CQUFTaUIsS0FBVCxDQUFlLFlBQWYsRUFBNkJoQixnQkFBN0IsQyIsImZpbGUiOiJ0ZXN0LXJlc3VsdC5tb2RlbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcclxuaW1wb3J0IG1vbmdvb3NlUGFnaW5hdGUgZnJvbSAnbW9uZ29vc2UtcGFnaW5hdGUnO1xyXG5cclxuY29uc3QgeyBTY2hlbWEgfSA9IG1vbmdvb3NlO1xyXG5cclxuY29uc3QgVGVzdFJlc3VsdFNjaGVtYSA9IG5ldyBTY2hlbWEoe1xyXG4gICAgbmFtZToge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICByZXF1aXJlZDogdHJ1ZVxyXG4gICAgfSxcclxuICAgIGRhdGU6IHtcclxuICAgICAgICB0eXBlOiBEYXRlLFxyXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgcHJpY2U6IHtcclxuICAgICAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICAgICAgcmVxdWlyZWQ6IHRydWVcclxuICAgIH0sXHJcbiAgICBkZXNjcmlwdGlvbjoge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZ1xyXG4gICAgfSxcclxuICAgIHBhdGllbnQ6IHtcclxuICAgICAgICByZWY6ICdQYXRpZW50JyxcclxuICAgICAgICB0eXBlOiBTY2hlbWEuVHlwZXMuT2JqZWN0SWQsXHJcbiAgICAgICAgcmVxdWlyZWQ6IHRydWVcclxuICAgIH1cclxufSk7XHJcblxyXG5UZXN0UmVzdWx0U2NoZW1hLnBsdWdpbihtb25nb29zZVBhZ2luYXRlKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1vbmdvb3NlLm1vZGVsKCdUZXN0UmVzdWx0JywgVGVzdFJlc3VsdFNjaGVtYSk7Il19