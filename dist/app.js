'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _routes = require('./config/routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose2.default.Promise = global.Promise;
_mongoose2.default.connect('mongodb://localhost/medilab');

var app = (0, _express2.default)();
var PORT = 3000;

app.get('/', function (req, res) {
    res.json({
        msg: 'Welcome to MediLab backend'
    });
});

app.use('/api', _routes.router);

app.listen(PORT, function () {
    console.log('Server is running at port ' + PORT);
});
//# sourceMappingURL=app.js.map