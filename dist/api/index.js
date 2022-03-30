"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.restRouter = undefined;

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _patient = require("./resources/patient/patient.router");

var _testResult = require("./resources/test-result");

var _user = require("./resources/user/user.router");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var restRouter = exports.restRouter = _express2.default.Router();
restRouter.use('/test-results', _testResult.testResultRouter);
restRouter.use('/patients', _patient.patientRouter);
restRouter.use('/users', _user.userRouter);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcGkvaW5kZXguanMiXSwibmFtZXMiOlsicmVzdFJvdXRlciIsImV4cHJlc3MiLCJSb3V0ZXIiLCJ1c2UiLCJ0ZXN0UmVzdWx0Um91dGVyIiwicGF0aWVudFJvdXRlciIsInVzZXJSb3V0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOztBQUNBOzs7O0FBRU8sSUFBTUEsa0NBQWFDLGtCQUFRQyxNQUFSLEVBQW5CO0FBQ1BGLFdBQVdHLEdBQVgsQ0FBZSxlQUFmLEVBQWdDQyw0QkFBaEM7QUFDQUosV0FBV0csR0FBWCxDQUFlLFdBQWYsRUFBNEJFLHNCQUE1QjtBQUNBTCxXQUFXRyxHQUFYLENBQWUsUUFBZixFQUF5QkcsZ0JBQXpCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGV4cHJlc3MgZnJvbSBcImV4cHJlc3NcIjtcclxuaW1wb3J0IHsgcGF0aWVudFJvdXRlciB9IGZyb20gXCIuL3Jlc291cmNlcy9wYXRpZW50L3BhdGllbnQucm91dGVyXCI7XHJcbmltcG9ydCB7IHRlc3RSZXN1bHRSb3V0ZXIgfSBmcm9tIFwiLi9yZXNvdXJjZXMvdGVzdC1yZXN1bHRcIjtcclxuaW1wb3J0IHsgdXNlclJvdXRlciB9IGZyb20gXCIuL3Jlc291cmNlcy91c2VyL3VzZXIucm91dGVyXCI7XHJcblxyXG5leHBvcnQgY29uc3QgcmVzdFJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XHJcbnJlc3RSb3V0ZXIudXNlKCcvdGVzdC1yZXN1bHRzJywgdGVzdFJlc3VsdFJvdXRlcik7XHJcbnJlc3RSb3V0ZXIudXNlKCcvcGF0aWVudHMnLCBwYXRpZW50Um91dGVyKTtcclxucmVzdFJvdXRlci51c2UoJy91c2VycycsIHVzZXJSb3V0ZXIpOyJdfQ==