"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _testResult = require("../models/test-result.model");

var _testResult2 = _interopRequireDefault(_testResult);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var testResults = [{ _id: "1", name: "Morfologia", date: new Date() }, { _id: "2", name: "Spirometria", date: new Date() }, { _id: "3", name: "Test antygenowy Covid-19", date: new Date() }];

exports.default = {
    findAll: function findAll(req, res, next) {
        res.json(testResults);
    },
    create: function create(req, res) {
        var _req$body = req.body,
            name = _req$body.name,
            date = _req$body.date,
            price = _req$body.price,
            description = _req$body.description;

        if (!name) {
            return res.status(400).json({ err: 'name is required field' });
        }
        if (!date) {
            return res.status(400).json({ err: 'date is required field' });
        }
        if (!price) {
            return res.status(400).json({ err: 'price is required field' });
        }

        _testResult2.default.create({ name: name, date: date, price: price, description: description }).then(function (testResult) {
            return res.json(testResult);
        }).catch(function (err) {
            return res.status(500).json(err);
        });
    }
};
//# sourceMappingURL=test-result.controller.js.map