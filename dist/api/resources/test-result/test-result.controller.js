'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _testResult = require('./test-result.model');

var _testResult2 = _interopRequireDefault(_testResult);

var _joi = require('joi');

var _joi2 = _interopRequireDefault(_joi);

var _httpStatusCodes = require('http-status-codes');

var _httpStatusCodes2 = _interopRequireDefault(_httpStatusCodes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = {
    findAll: function findAll(req, res, next) {
        var _req$query = req.query,
            _req$query$page = _req$query.page,
            page = _req$query$page === undefined ? 1 : _req$query$page,
            _req$query$perPage = _req$query.perPage,
            perPage = _req$query$perPage === undefined ? 10 : _req$query$perPage,
            filter = _req$query.filter,
            sortField = _req$query.sortField,
            sortDir = _req$query.sortDir;

        var options = {
            page: parseInt(page, 10),
            limit: parseInt(perPage, 10),
            populate: 'patient'
        };

        var query = {};
        if (filter) {
            query.name = {
                $regex: filter
            };
        }
        if (sortField && sortDir) {
            options.sort = _defineProperty({}, sortField, sortDir);
        }
        console.log(options);
        _testResult2.default.paginate(query, options).then(function (testResults) {
            return res.json(testResults);
        }).catch(function (err) {
            return res.status(_httpStatusCodes2.default.INTERNAL_SERVER_ERROR).json(err);
        });
    },
    create: function create(req, res, next) {
        var schema = _joi2.default.object().keys({
            name: _joi2.default.string().required(),
            date: _joi2.default.date().required(),
            price: _joi2.default.number().required(),
            description: _joi2.default.string().optional(),
            patient: _joi2.default.string().required()
        });

        var _schema$validate = schema.validate(req.body),
            error = _schema$validate.error,
            value = _schema$validate.value;

        if (error && error.details) {
            return res.status(_httpStatusCodes2.default.BAD_REQUEST).json(error);
        }

        _testResult2.default.create(value).then(function (testResult) {
            return res.json(testResult);
        }).catch(function (err) {
            return res.status(_httpStatusCodes2.default.INTERNAL_SERVER_ERROR).json(err);
        });
    },
    findOne: function findOne(req, res) {
        var id = req.params.id;

        _testResult2.default.findById(id).then(function (testResult) {
            if (!testResult) {
                return res.status(_httpStatusCodes2.default.NOT_FOUND).json({ err: 'Test result not found' });
            }

            return res.json(testResult);
        }).catch(function (err) {
            return res.status(_httpStatusCodes2.default.INTERNAL_SERVER_ERROR).json(err);
        });
    },
    delete: function _delete(req, res) {
        var id = req.params.id;

        _testResult2.default.findByIdAndRemove(id).then(function (testResult) {
            if (!testResult) {
                return res.status(_httpStatusCodes2.default.NOT_FOUND).json({ err: 'Test result not found' });
            }

            return res.json(testResult);
        }).catch(function (err) {
            return res.status(_httpStatusCodes2.default.INTERNAL_SERVER_ERROR).json(err);
        });
    },
    update: function update(req, res) {
        var id = req.params.id;

        var schema = _joi2.default.object().keys({
            name: _joi2.default.string().optional(),
            date: _joi2.default.date().optional(),
            price: _joi2.default.number().optional(),
            description: _joi2.default.string().optional(),
            patient: _joi2.default.string().optional()
        });

        var _schema$validate2 = schema.validate(req.body),
            error = _schema$validate2.error,
            value = _schema$validate2.value;

        if (error && error.details) {
            return res.status(_httpStatusCodes2.default.BAD_REQUEST).json(error);
        }

        _testResult2.default.findOneAndUpdate({ _id: id }, value, { new: true }).then(function (testResult) {
            return res.json(testResult);
        }).catch(function (err) {
            return res.status(_httpStatusCodes2.default.INTERNAL_SERVER_ERROR).json(err);
        });
    }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL3Rlc3QtcmVzdWx0L3Rlc3QtcmVzdWx0LmNvbnRyb2xsZXIuanMiXSwibmFtZXMiOlsiZmluZEFsbCIsInJlcSIsInJlcyIsIm5leHQiLCJxdWVyeSIsInBhZ2UiLCJwZXJQYWdlIiwiZmlsdGVyIiwic29ydEZpZWxkIiwic29ydERpciIsIm9wdGlvbnMiLCJwYXJzZUludCIsImxpbWl0IiwicG9wdWxhdGUiLCJuYW1lIiwiJHJlZ2V4Iiwic29ydCIsImNvbnNvbGUiLCJsb2ciLCJUZXN0UmVzdWx0IiwicGFnaW5hdGUiLCJ0aGVuIiwianNvbiIsInRlc3RSZXN1bHRzIiwiY2F0Y2giLCJzdGF0dXMiLCJIdHRwU3RhdHVzIiwiSU5URVJOQUxfU0VSVkVSX0VSUk9SIiwiZXJyIiwiY3JlYXRlIiwic2NoZW1hIiwiSm9pIiwib2JqZWN0Iiwia2V5cyIsInN0cmluZyIsInJlcXVpcmVkIiwiZGF0ZSIsInByaWNlIiwibnVtYmVyIiwiZGVzY3JpcHRpb24iLCJvcHRpb25hbCIsInBhdGllbnQiLCJ2YWxpZGF0ZSIsImJvZHkiLCJlcnJvciIsInZhbHVlIiwiZGV0YWlscyIsIkJBRF9SRVFVRVNUIiwidGVzdFJlc3VsdCIsImZpbmRPbmUiLCJpZCIsInBhcmFtcyIsImZpbmRCeUlkIiwiTk9UX0ZPVU5EIiwiZGVsZXRlIiwiZmluZEJ5SWRBbmRSZW1vdmUiLCJ1cGRhdGUiLCJmaW5kT25lQW5kVXBkYXRlIiwiX2lkIiwibmV3Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O2tCQUVlO0FBQ1hBLFdBRFcsbUJBQ0hDLEdBREcsRUFDRUMsR0FERixFQUNPQyxJQURQLEVBQ2E7QUFBQSx5QkFDMkNGLElBQUlHLEtBRC9DO0FBQUEseUNBQ1pDLElBRFk7QUFBQSxZQUNaQSxJQURZLG1DQUNMLENBREs7QUFBQSw0Q0FDRkMsT0FERTtBQUFBLFlBQ0ZBLE9BREUsc0NBQ1EsRUFE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LENBQWdCekMsSUFBSTBDLElBQXBCLENBVlo7QUFBQSxZQVVMQyxLQVZLLHFCQVVMQSxLQVZLO0FBQUEsWUFVRUMsS0FWRixxQkFVRUEsS0FWRjs7QUFXYixZQUFJRCxTQUFTQSxNQUFNRSxPQUFuQixFQUE0QjtBQUN4QixtQkFBTzVDLElBQUl1QixNQUFKLENBQVdDLDBCQUFXcUIsV0FBdEIsRUFBbUN6QixJQUFuQyxDQUF3Q3NCLEtBQXhDLENBQVA7QUFDSDs7QUFFRHpCLDZCQUFXc0MsZ0JBQVgsQ0FBNEIsRUFBQ0MsS0FBS1IsRUFBTixFQUE1QixFQUF1Q0wsS0FBdkMsRUFBOEMsRUFBQ2MsS0FBSyxJQUFOLEVBQTlDLEVBQ0t0QyxJQURMLENBQ1U7QUFBQSxtQkFBY25CLElBQUlvQixJQUFKLENBQVMwQixVQUFULENBQWQ7QUFBQSxTQURWLEVBRUt4QixLQUZMLENBRVc7QUFBQSxtQkFBT3RCLElBQUl1QixNQUFKLENBQVdDLDBCQUFXQyxxQkFBdEIsRUFBNkNMLElBQTdDLENBQWtETSxHQUFsRCxDQUFQO0FBQUEsU0FGWDtBQUdIO0FBeEZVLEMiLCJmaWxlIjoidGVzdC1yZXN1bHQuY29udHJvbGxlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUZXN0UmVzdWx0IGZyb20gXCIuL3Rlc3QtcmVzdWx0Lm1vZGVsXCI7XHJcbmltcG9ydCBKb2kgZnJvbSAnam9pJztcclxuaW1wb3J0IEh0dHBTdGF0dXMgZnJvbSAnaHR0cC1zdGF0dXMtY29kZXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgZmluZEFsbChyZXEsIHJlcywgbmV4dCkge1xyXG4gICAgICAgIGNvbnN0IHsgcGFnZSA9IDEsIHBlclBhZ2UgPSAxMCwgZmlsdGVyLCBzb3J0RmllbGQsIHNvcnREaXIgfSA9IHJlcS5xdWVyeTtcclxuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICAgICAgICBwYWdlOiBwYXJzZUludChwYWdlLCAxMCksXHJcbiAgICAgICAgICAgIGxpbWl0OiBwYXJzZUludChwZXJQYWdlLCAxMCksXHJcbiAgICAgICAgICAgIHBvcHVsYXRlOiAncGF0aWVudCdcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBxdWVyeSA9IHt9O1xyXG4gICAgICAgIGlmIChmaWx0ZXIpIHtcclxuICAgICAgICAgICAgcXVlcnkubmFtZSA9IHtcclxuICAgICAgICAgICAgICAgICRyZWdleDogZmlsdGVyXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzb3J0RmllbGQgJiYgc29ydERpcikge1xyXG4gICAgICAgICAgICBvcHRpb25zLnNvcnQgPSB7XHJcbiAgICAgICAgICAgICAgICBbc29ydEZpZWxkXTogc29ydERpclxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKG9wdGlvbnMpO1xyXG4gICAgICAgIFRlc3RSZXN1bHQucGFnaW5hdGUocXVlcnksIG9wdGlvbnMpLnRoZW4odGVzdFJlc3VsdHMgPT4gcmVzLmpzb24odGVzdFJlc3VsdHMpKVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHJlcy5zdGF0dXMoSHR0cFN0YXR1cy5JTlRFUk5BTF9TRVJWRVJfRVJST1IpLmpzb24oZXJyKSk7XHJcbiAgICB9LFxyXG5cclxuICAgIGNyZWF0ZShyZXEsIHJlcywgbmV4dCkge1xyXG4gICAgICAgIGNvbnN0IHNjaGVtYSA9IEpvaS5vYmplY3QoKS5rZXlzKHtcclxuICAgICAgICAgICAgbmFtZTogSm9pLnN0cmluZygpLnJlcXVpcmVkKCksXHJcbiAgICAgICAgICAgIGRhdGU6IEpvaS5kYXRlKCkucmVxdWlyZWQoKSxcclxuICAgICAgICAgICAgcHJpY2U6IEpvaS5udW1iZXIoKS5yZXF1aXJlZCgpLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogSm9pLnN0cmluZygpLm9wdGlvbmFsKCksXHJcbiAgICAgICAgICAgIHBhdGllbnQ6IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgeyBlcnJvciwgdmFsdWUgfSA9IHNjaGVtYS52YWxpZGF0ZShyZXEuYm9keSk7XHJcbiAgICAgICAgaWYgKGVycm9yICYmIGVycm9yLmRldGFpbHMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoSHR0cFN0YXR1cy5CQURfUkVRVUVTVCkuanNvbihlcnJvcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBUZXN0UmVzdWx0LmNyZWF0ZSh2YWx1ZSlcclxuICAgICAgICAgICAgLnRoZW4odGVzdFJlc3VsdCA9PiByZXMuanNvbih0ZXN0UmVzdWx0KSlcclxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiByZXMuc3RhdHVzKEh0dHBTdGF0dXMuSU5URVJOQUxfU0VSVkVSX0VSUk9SKS5qc29uKGVycikpO1xyXG4gICAgfSxcclxuXHJcbiAgICBmaW5kT25lKHJlcSwgcmVzKSB7XHJcbiAgICAgICAgbGV0IHtpZH0gPSByZXEucGFyYW1zO1xyXG4gICAgICAgIFRlc3RSZXN1bHQuZmluZEJ5SWQoaWQpXHJcbiAgICAgICAgICAgIC50aGVuKHRlc3RSZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0ZXN0UmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoSHR0cFN0YXR1cy5OT1RfRk9VTkQpLmpzb24oe2VycjogJ1Rlc3QgcmVzdWx0IG5vdCBmb3VuZCd9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmpzb24odGVzdFJlc3VsdCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gcmVzLnN0YXR1cyhIdHRwU3RhdHVzLklOVEVSTkFMX1NFUlZFUl9FUlJPUikuanNvbihlcnIpKTtcclxuICAgIH0sXHJcblxyXG4gICAgZGVsZXRlKHJlcSwgcmVzKSB7XHJcbiAgICAgICAgbGV0IHtpZH0gPSByZXEucGFyYW1zO1xyXG4gICAgICAgIFRlc3RSZXN1bHQuZmluZEJ5SWRBbmRSZW1vdmUoaWQpXHJcbiAgICAgICAgICAgIC50aGVuKHRlc3RSZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0ZXN0UmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoSHR0cFN0YXR1cy5OT1RfRk9VTkQpLmpzb24oe2VycjogJ1Rlc3QgcmVzdWx0IG5vdCBmb3VuZCd9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmpzb24odGVzdFJlc3VsdCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gcmVzLnN0YXR1cyhIdHRwU3RhdHVzLklOVEVSTkFMX1NFUlZFUl9FUlJPUikuanNvbihlcnIpKTtcclxuICAgIH0sXHJcblxyXG4gICAgdXBkYXRlKHJlcSwgcmVzKSB7XHJcbiAgICAgICAgbGV0IHtpZH0gPSByZXEucGFyYW1zO1xyXG4gICAgICAgIGNvbnN0IHNjaGVtYSA9IEpvaS5vYmplY3QoKS5rZXlzKHtcclxuICAgICAgICAgICAgbmFtZTogSm9pLnN0cmluZygpLm9wdGlvbmFsKCksXHJcbiAgICAgICAgICAgIGRhdGU6IEpvaS5kYXRlKCkub3B0aW9uYWwoKSxcclxuICAgICAgICAgICAgcHJpY2U6IEpvaS5udW1iZXIoKS5vcHRpb25hbCgpLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogSm9pLnN0cmluZygpLm9wdGlvbmFsKCksXHJcbiAgICAgICAgICAgIHBhdGllbnQ6IEpvaS5zdHJpbmcoKS5vcHRpb25hbCgpXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgeyBlcnJvciwgdmFsdWUgfSA9IHNjaGVtYS52YWxpZGF0ZShyZXEuYm9keSk7XHJcbiAgICAgICAgaWYgKGVycm9yICYmIGVycm9yLmRldGFpbHMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoSHR0cFN0YXR1cy5CQURfUkVRVUVTVCkuanNvbihlcnJvcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBUZXN0UmVzdWx0LmZpbmRPbmVBbmRVcGRhdGUoe19pZDogaWR9LCB2YWx1ZSwge25ldzogdHJ1ZX0pXHJcbiAgICAgICAgICAgIC50aGVuKHRlc3RSZXN1bHQgPT4gcmVzLmpzb24odGVzdFJlc3VsdCkpXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gcmVzLnN0YXR1cyhIdHRwU3RhdHVzLklOVEVSTkFMX1NFUlZFUl9FUlJPUikuanNvbihlcnIpKTtcclxuICAgIH1cclxufSJdfQ==