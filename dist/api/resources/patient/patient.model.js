"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;


var PatientSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: Date,
        required: true
    },
    pesel: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phoneNo: {
        type: Number,
        required: true
    }
});

exports.default = _mongoose2.default.model('Patient', PatientSchema);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL3BhdGllbnQvcGF0aWVudC5tb2RlbC5qcyJdLCJuYW1lcyI6WyJTY2hlbWEiLCJtb25nb29zZSIsIlBhdGllbnRTY2hlbWEiLCJmaXJzdE5hbWUiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJsYXN0TmFtZSIsImRhdGVPZkJpcnRoIiwiRGF0ZSIsInBlc2VsIiwiTnVtYmVyIiwiZW1haWwiLCJwaG9uZU5vIiwibW9kZWwiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7Ozs7SUFFUUEsTSxHQUFXQyxrQixDQUFYRCxNOzs7QUFFUixJQUFNRSxnQkFBZ0IsSUFBSUYsTUFBSixDQUFXO0FBQzdCRyxlQUFXO0FBQ1BDLGNBQU1DLE1BREM7QUFFUEMsa0JBQVU7QUFGSCxLQURrQjtBQUs3QkMsY0FBVTtBQUNOSCxjQUFNQyxNQURBO0FBRU5DLGtCQUFVO0FBRkosS0FMbUI7QUFTN0JFLGlCQUFhO0FBQ1RKLGNBQU1LLElBREc7QUFFVEgsa0JBQVU7QUFGRCxLQVRnQjtBQWE3QkksV0FBTztBQUNITixjQUFNTyxNQURIO0FBRUhMLGtCQUFVO0FBRlAsS0Fic0I7QUFpQjdCTSxXQUFPO0FBQ0hSLGNBQU1DLE1BREg7QUFFSEMsa0JBQVU7QUFGUCxLQWpCc0I7QUFxQjdCTyxhQUFTO0FBQ0xULGNBQU1PLE1BREQ7QUFFTEwsa0JBQVU7QUFGTDtBQXJCb0IsQ0FBWCxDQUF0Qjs7a0JBMkJlTCxtQkFBU2EsS0FBVCxDQUFlLFNBQWYsRUFBMEJaLGFBQTFCLEMiLCJmaWxlIjoicGF0aWVudC5tb2RlbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcclxuXHJcbmNvbnN0IHsgU2NoZW1hIH0gPSBtb25nb29zZTtcclxuXHJcbmNvbnN0IFBhdGllbnRTY2hlbWEgPSBuZXcgU2NoZW1hKHtcclxuICAgIGZpcnN0TmFtZToge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICByZXF1aXJlZDogdHJ1ZVxyXG4gICAgfSxcclxuICAgIGxhc3ROYW1lOiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgZGF0ZU9mQmlydGg6IHtcclxuICAgICAgICB0eXBlOiBEYXRlLFxyXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgcGVzZWw6IHtcclxuICAgICAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICAgICAgcmVxdWlyZWQ6IHRydWVcclxuICAgIH0sXHJcbiAgICBlbWFpbDoge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICByZXF1aXJlZDogdHJ1ZVxyXG4gICAgfSxcclxuICAgIHBob25lTm86IHtcclxuICAgICAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICAgICAgcmVxdWlyZWQ6IHRydWVcclxuICAgIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbW9uZ29vc2UubW9kZWwoJ1BhdGllbnQnLCBQYXRpZW50U2NoZW1hKTsiXX0=