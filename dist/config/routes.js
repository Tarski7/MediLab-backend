'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.router = undefined;

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _testResult = require('../api/controllers/test-result.controller');

var _testResult2 = _interopRequireDefault(_testResult);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = exports.router = _express2.default.Router();

router.get('/test-results', _testResult2.default.findAll);
//# sourceMappingURL=routes.js.map