'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _api = require('./api');

var _globalMiddleware = require('./api/middlewares/global-middleware');

var _development = require('./config/env/development');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose2.default.Promise = global.Promise;
_mongoose2.default.connect('mongodb://localhost/' + _development.devConfig.database);

var app = (0, _express2.default)();
var PORT = _development.devConfig.port;

var swaggerUi = require('swagger-ui-express');
var swaggerJsDoc = require('swagger-jsdoc');
var swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: "MediLab API Documentation",
            description: "Swagger API Documentation for MediLab App",
            contact: {
                name: "me"
            },
            servers: ["http://localhost:3000"],
            tags: [{
                name: "TestResults",
                description: "API for test results"
            }, {
                name: "Patients",
                description: "API for patients"
            }],
            schemes: ["http"],
            consumes: ["application/json"],
            produces: ["application/json"]
        },
        basePath: "/api",
        paths: {
            "/test-results": {
                post: {
                    tags: ["TestResults"],
                    summary: "Create new test result",
                    description: "Create new test result in the system",
                    parameters: [{
                        name: "test-result",
                        description: "Test result that we want to create",
                        in: "body",
                        required: true,
                        schema: {
                            $ref: "#definitions/TestResult"
                        }
                    }],
                    produces: ["application/json"],
                    responses: {
                        200: {
                            description: "New test result has been created",
                            schema: {
                                $ref: "#definitions/TestResult"
                            }
                        }
                    }
                },
                get: {
                    tags: ["TestResults"],
                    summary: "Find all test results from the server",
                    description: "All test results",
                    parameters: [{
                        name: "page",
                        type: "integer",
                        description: "Set the page for pagination",
                        in: "query"
                    }, {
                        name: "perPage",
                        type: "integer",
                        description: "Set the limit for the records",
                        in: "query"
                    }, {
                        name: "filter",
                        type: "string",
                        description: "Filter the test results by name",
                        in: "query"
                    }, {
                        name: "sortField",
                        type: "string",
                        description: "Define the sortField for sorting i.e. name, date, price",
                        in: "query"
                    }, {
                        name: "sortDir",
                        type: "string",
                        description: "Define the sortDir i.e. desc, asc",
                        in: "query"
                    }],
                    responses: {
                        200: {
                            description: "OK",
                            content: "application/json",
                            schema: {
                                $ref: "#definitions/TestResults"
                            }
                        }
                    }
                }
            },
            "/test-results/{id}": {
                parameters: [{
                    name: "id",
                    in: "path",
                    description: "Id of the test result",
                    type: "string"
                }],
                get: {
                    tags: ["TestResults"],
                    description: "Find test result by id",
                    summary: "Find single test result",
                    responses: {
                        200: {
                            description: "Test result has been found",
                            schema: {
                                $ref: "#definitions/TestResult"
                            }
                        },
                        404: {
                            description: "Test result not found"
                        }
                    }
                },
                delete: {
                    tags: ["TestResults"],
                    description: "Delete test result by id",
                    summary: "Delete single test result",
                    responses: {
                        200: {
                            description: "Test result has been deleted",
                            schema: {
                                $ref: "#definitions/TestResult"
                            }
                        },
                        404: {
                            description: "Test result not found"
                        }
                    }
                },
                put: {
                    tags: ["TestResults"],
                    summary: "Update test result",
                    description: "Update test result in the system",
                    parameters: [{
                        name: "test-result",
                        description: "Test result that we want to update",
                        in: "body",
                        required: true,
                        schema: {
                            $ref: "#definitions/UpdateTestResult"
                        }
                    }],
                    produces: ["application/json"],
                    responses: {
                        200: {
                            description: "Test result has been updated",
                            schema: {
                                $ref: "#definitions/TestResult"
                            }
                        }
                    }
                }
            },
            "/patients": {
                post: {
                    tags: ["Patients"],
                    summary: "Create new patient",
                    description: "Create new patient in the system",
                    parameters: [{
                        name: "patient",
                        description: "Patient that we want to create",
                        in: "body",
                        required: true,
                        schema: {
                            $ref: "#definitions/Patient"
                        }
                    }],
                    produces: ["application/json"],
                    responses: {
                        200: {
                            description: "New patient has been created",
                            schema: {
                                $ref: "#definitions/Patient"
                            }
                        }
                    }
                },
                get: {
                    tags: ["Patients"],
                    summary: "Find all patients from the server",
                    description: "All patients",
                    responses: {
                        200: {
                            description: "OK",
                            content: "application/json",
                            schema: {
                                $ref: "#definitions/Patients"
                            }
                        }
                    }
                }
            },
            "/patients/{id}": {
                parameters: [{
                    name: "id",
                    in: "path",
                    description: "Id of the patient",
                    type: "string"
                }],
                get: {
                    tags: ["Patients"],
                    description: "Find patient by id",
                    summary: "Find single patient",
                    responses: {
                        200: {
                            description: "Patient has been found",
                            schema: {
                                $ref: "#definitions/Patient"
                            }
                        },
                        404: {
                            description: "Patient not found"
                        }
                    }
                },
                delete: {
                    tags: ["Patients"],
                    description: "Delete patient by id",
                    summary: "Delete single patient",
                    responses: {
                        200: {
                            description: "Patient has been deleted",
                            schema: {
                                $ref: "#definitions/Patient"
                            }
                        },
                        404: {
                            description: "Patient not found"
                        }
                    }
                },
                put: {
                    tags: ["Patients"],
                    summary: "Update patient",
                    description: "Update patient in the system",
                    parameters: [{
                        name: "patient",
                        description: "Patient that we want to update",
                        in: "body",
                        required: true,
                        schema: {
                            $ref: "#definitions/UpdatePatient"
                        }
                    }],
                    produces: ["application/json"],
                    responses: {
                        200: {
                            description: "Patient has been updated",
                            schema: {
                                $ref: "#definitions/Patient"
                            }
                        }
                    }
                }
            }
        },
        definitions: {
            TestResult: {
                required: ["name", "date", "price", "patient"],
                properties: {
                    _id: {
                        "type": "string",
                        "uniqueItems": true
                    },
                    name: {
                        "type": "string"
                    },
                    date: {
                        "type": "string",
                        "format": "date"
                    },
                    price: {
                        "type": "integer",
                        "format": "float"
                    },
                    description: {
                        "type": "string"
                    },
                    patient: {
                        "type": "string"
                    }
                }
            },
            UpdateTestResult: {
                properties: {
                    name: {
                        "type": "string"
                    },
                    date: {
                        "type": "string",
                        "format": "date"
                    },
                    price: {
                        "type": "number",
                        "format": "float"
                    },
                    description: {
                        "type": "string"
                    },
                    patient: {
                        "type": "string"
                    }
                }
            },
            TestResults: {
                properties: {
                    docs: {
                        type: "array",
                        $ref: "#definitions/TestResult"
                    }
                },
                total: {
                    type: "integer"
                },
                page: {
                    type: "integer"
                },
                pages: {
                    type: "integer"
                },
                limit: {
                    type: "integer"
                }
            },
            Patient: {
                required: ["firstName", "lastName", "dateOfBirth", "pesel", "email", "phoneNo"],
                properties: {
                    _id: {
                        "type": "string",
                        "uniqueItems": true
                    },
                    firstName: {
                        "type": "string"
                    },
                    lastName: {
                        "type": "string"
                    },
                    dateOfBirth: {
                        "type": "string",
                        "format": "date"
                    },
                    pesel: {
                        "type": "integer"
                    },
                    email: {
                        "type": "string"
                    },
                    phoneNo: {
                        "type": "integer"
                    }
                }
            },
            Patients: {
                properties: {
                    docs: {
                        type: "array",
                        $ref: "#definitions/Patient"
                    }
                }
            },
            UpdatePatient: {
                properties: {
                    firstName: {
                        "type": "string"
                    },
                    lastName: {
                        "type": "string"
                    },
                    dateOfBirth: {
                        "type": "string",
                        "format": "date"
                    },
                    pesel: {
                        "type": "integer"
                    },
                    email: {
                        "type": "string"
                    },
                    phoneNo: {
                        "type": "integer"
                    }
                }
            }
        }
    },
    apis: ["app.js"]
};

var swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

(0, _globalMiddleware.setGlobalMiddleware)(app);

app.use('/api', _api.restRouter);
app.use(function (req, res, next) {
    var error = new Error('Not found');
    error.message = 'Invalid route';
    error.status = 404;
    next(error);
});

app.use(function (error, req, res, next) {
    res.status(error.status || 500);
    return res.json({
        error: {
            message: error.message
        }
    });
});

app.listen(PORT, function () {
    console.log('Server is running at port ' + PORT);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcHAuanMiXSwibmFtZXMiOlsibW9uZ29vc2UiLCJQcm9taXNlIiwiZ2xvYmFsIiwiY29ubmVjdCIsImRldkNvbmZpZyIsImRhdGFiYXNlIiwiYXBwIiwiUE9SVCIsInBvcnQiLCJzd2FnZ2VyVWkiLCJyZXF1aXJlIiwic3dhZ2dlckpzRG9jIiwic3dhZ2dlck9wdGlvbnMiLCJzd2FnZ2VyRGVmaW5pdGlvbiIsImluZm8iLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiY29udGFjdCIsIm5hbWUiLCJzZXJ2ZXJzIiwidGFncyIsInNjaGVtZXMiLCJjb25zdW1lcyIsInByb2R1Y2VzIiwiYmFzZVBhdGgiLCJwYXRocyIsInBvc3QiLCJzdW1tYXJ5IiwicGFyYW1ldGVycyIsImluIiwicmVxdWlyZWQiLCJzY2hlbWEiLCIkcmVmIiwicmVzcG9uc2VzIiwiZ2V0IiwidHlwZSIsImNvbnRlbnQiLCJkZWxldGUiLCJwdXQiLCJkZWZpbml0aW9ucyIsIlRlc3RSZXN1bHQiLCJwcm9wZXJ0aWVzIiwiX2lkIiwiZGF0ZSIsInByaWNlIiwicGF0aWVudCIsIlVwZGF0ZVRlc3RSZXN1bHQiLCJUZXN0UmVzdWx0cyIsImRvY3MiLCJ0b3RhbCIsInBhZ2UiLCJwYWdlcyIsImxpbWl0IiwiUGF0aWVudCIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiZGF0ZU9mQmlydGgiLCJwZXNlbCIsImVtYWlsIiwicGhvbmVObyIsIlBhdGllbnRzIiwiVXBkYXRlUGF0aWVudCIsImFwaXMiLCJzd2FnZ2VyRG9jcyIsInVzZSIsInNlcnZlIiwic2V0dXAiLCJyZXN0Um91dGVyIiwicmVxIiwicmVzIiwibmV4dCIsImVycm9yIiwiRXJyb3IiLCJtZXNzYWdlIiwic3RhdHVzIiwianNvbiIsImxpc3RlbiIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOztBQUNBOztBQUNBOzs7O0FBRUFBLG1CQUFTQyxPQUFULEdBQW1CQyxPQUFPRCxP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O0FBc1pBLElBQU1DLGNBQWNwRCxhQUFhQyxjQUFiLENBQXBCO0FBQ0FOLElBQUkwRCxHQUFKLENBQVEsV0FBUixFQUFxQnZELFVBQVV3RCxLQUEvQixFQUFzQ3hELFVBQVV5RCxLQUFWLENBQWdCSCxXQUFoQixDQUF0Qzs7QUFFQSwyQ0FBb0J6RCxHQUFwQjs7QUFFQUEsSUFBSTBELEdBQUosQ0FBUSxNQUFSLEVBQWdCRyxlQUFoQjtBQUNBN0QsSUFBSTBELEdBQUosQ0FBUSxVQUFDSSxHQUFELEVBQU1DLEdBQU4sRUFBV0MsSUFBWCxFQUFvQjtBQUN4QixRQUFNQyxRQUFRLElBQUlDLEtBQUosQ0FBVSxXQUFWLENBQWQ7QUFDQUQsVUFBTUUsT0FBTixHQUFnQixlQUFoQjtBQUNBRixVQUFNRyxNQUFOLEdBQWUsR0FBZjtBQUNBSixTQUFLQyxLQUFMO0FBQ0gsQ0FMRDs7QUFPQWpFLElBQUkwRCxHQUFKLENBQVEsVUFBQ08sS0FBRCxFQUFRSCxHQUFSLEVBQWFDLEdBQWIsRUFBa0JDLElBQWxCLEVBQTJCO0FBQy9CRCxRQUFJSyxNQUFKLENBQVdILE1BQU1HLE1BQU4sSUFBZ0IsR0FBM0I7QUFDQSxXQUFPTCxJQUFJTSxJQUFKLENBQVM7QUFDWkosZUFBTztBQUNIRSxxQkFBU0YsTUFBTUU7QUFEWjtBQURLLEtBQVQsQ0FBUDtBQUtILENBUEQ7O0FBU0FuRSxJQUFJc0UsTUFBSixDQUFXckUsSUFBWCxFQUFpQixZQUFNO0FBQ25Cc0UsWUFBUUMsR0FBUixnQ0FBeUN2RSxJQUF6QztBQUNILENBRkQiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XHJcbmltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XHJcbmltcG9ydCB7IHJlc3RSb3V0ZXIgfSBmcm9tICcuL2FwaSc7XHJcbmltcG9ydCB7IHNldEdsb2JhbE1pZGRsZXdhcmUgfSBmcm9tICcuL2FwaS9taWRkbGV3YXJlcy9nbG9iYWwtbWlkZGxld2FyZSc7XHJcbmltcG9ydCB7IGRldkNvbmZpZyB9IGZyb20gJy4vY29uZmlnL2Vudi9kZXZlbG9wbWVudCc7XHJcblxyXG5tb25nb29zZS5Qcm9taXNlID0gZ2xvYmFsLlByb21pc2U7XHJcbm1vbmdvb3NlLmNvbm5lY3QoYG1vbmdvZGI6Ly9sb2NhbGhvc3QvJHtkZXZDb25maWcuZGF0YWJhc2V9YCk7XHJcblxyXG5jb25zdCBhcHAgPSBleHByZXNzKCk7XHJcbmNvbnN0IFBPUlQgPSBkZXZDb25maWcucG9ydDtcclxuXHJcbmNvbnN0IHN3YWdnZXJVaSA9IHJlcXVpcmUoJ3N3YWdnZXItdWktZXhwcmVzcycpO1xyXG5jb25zdCBzd2FnZ2VySnNEb2MgPSByZXF1aXJlKCdzd2FnZ2VyLWpzZG9jJyk7XHJcbmNvbnN0IHN3YWdnZXJPcHRpb25zID0ge1xyXG4gICAgc3dhZ2dlckRlZmluaXRpb246IHtcclxuICAgICAgICBpbmZvOiB7XHJcbiAgICAgICAgICAgIHRpdGxlOiBcIk1lZGlMYWIgQVBJIERvY3VtZW50YXRpb25cIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiU3dhZ2dlciBBUEkgRG9jdW1lbnRhdGlvbiBmb3IgTWVkaUxhYiBBcHBcIixcclxuICAgICAgICAgICAgY29udGFjdDoge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJtZVwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNlcnZlcnM6IFtcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMFwiXSxcclxuICAgICAgICAgICAgdGFnczogW1xyXG4gICAgICAgICAgICAgICAgeyBcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIlRlc3RSZXN1bHRzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiQVBJIGZvciB0ZXN0IHJlc3VsdHNcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJQYXRpZW50c1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkFQSSBmb3IgcGF0aWVudHNcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBzY2hlbWVzOiBbXCJodHRwXCJdLFxyXG4gICAgICAgICAgICBjb25zdW1lczogW1wiYXBwbGljYXRpb24vanNvblwiXSxcclxuICAgICAgICAgICAgcHJvZHVjZXM6IFtcImFwcGxpY2F0aW9uL2pzb25cIl1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGJhc2VQYXRoOiBcIi9hcGlcIixcclxuICAgICAgICBwYXRoczoge1xyXG4gICAgICAgICAgICBcIi90ZXN0LXJlc3VsdHNcIjoge1xyXG4gICAgICAgICAgICAgICAgcG9zdDoge1xyXG4gICAgICAgICAgICAgICAgICAgIHRhZ3M6IFtcIlRlc3RSZXN1bHRzXCJdLFxyXG4gICAgICAgICAgICAgICAgICAgIHN1bW1hcnk6IFwiQ3JlYXRlIG5ldyB0ZXN0IHJlc3VsdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkNyZWF0ZSBuZXcgdGVzdCByZXN1bHQgaW4gdGhlIHN5c3RlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtZXRlcnM6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ0ZXN0LXJlc3VsdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiVGVzdCByZXN1bHQgdGhhdCB3ZSB3YW50IHRvIGNyZWF0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW46IFwiYm9keVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2hlbWE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkcmVmOiBcIiNkZWZpbml0aW9ucy9UZXN0UmVzdWx0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjZXM6IFtcImFwcGxpY2F0aW9uL2pzb25cIl0sXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDIwMDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiTmV3IHRlc3QgcmVzdWx0IGhhcyBiZWVuIGNyZWF0ZWRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjaGVtYToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRyZWY6IFwiI2RlZmluaXRpb25zL1Rlc3RSZXN1bHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGdldDoge1xyXG4gICAgICAgICAgICAgICAgICAgIHRhZ3M6IFtcIlRlc3RSZXN1bHRzXCJdLFxyXG4gICAgICAgICAgICAgICAgICAgIHN1bW1hcnk6IFwiRmluZCBhbGwgdGVzdCByZXN1bHRzIGZyb20gdGhlIHNlcnZlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkFsbCB0ZXN0IHJlc3VsdHNcIixcclxuICAgICAgICAgICAgICAgICAgICBwYXJhbWV0ZXJzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwicGFnZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJpbnRlZ2VyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJTZXQgdGhlIHBhZ2UgZm9yIHBhZ2luYXRpb25cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluOiBcInF1ZXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJwZXJQYWdlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImludGVnZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlNldCB0aGUgbGltaXQgZm9yIHRoZSByZWNvcmRzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbjogXCJxdWVyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiZmlsdGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInN0cmluZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiRmlsdGVyIHRoZSB0ZXN0IHJlc3VsdHMgYnkgbmFtZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW46IFwicXVlcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInNvcnRGaWVsZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJzdHJpbmdcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkRlZmluZSB0aGUgc29ydEZpZWxkIGZvciBzb3J0aW5nIGkuZS4gbmFtZSwgZGF0ZSwgcHJpY2VcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluOiBcInF1ZXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJzb3J0RGlyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInN0cmluZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiRGVmaW5lIHRoZSBzb3J0RGlyIGkuZS4gZGVzYywgYXNjXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbjogXCJxdWVyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAyMDA6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIk9LXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjaGVtYToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRyZWY6IFwiI2RlZmluaXRpb25zL1Rlc3RSZXN1bHRzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCIvdGVzdC1yZXN1bHRzL3tpZH1cIjoge1xyXG4gICAgICAgICAgICAgICAgcGFyYW1ldGVyczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJpZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbjogXCJwYXRoXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIklkIG9mIHRoZSB0ZXN0IHJlc3VsdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInN0cmluZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGdldDoge1xyXG4gICAgICAgICAgICAgICAgICAgIHRhZ3M6IFtcIlRlc3RSZXN1bHRzXCJdLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkZpbmQgdGVzdCByZXN1bHQgYnkgaWRcIixcclxuICAgICAgICAgICAgICAgICAgICBzdW1tYXJ5OiBcIkZpbmQgc2luZ2xlIHRlc3QgcmVzdWx0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDIwMDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiVGVzdCByZXN1bHQgaGFzIGJlZW4gZm91bmRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjaGVtYToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRyZWY6IFwiI2RlZmluaXRpb25zL1Rlc3RSZXN1bHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA0MDQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlRlc3QgcmVzdWx0IG5vdCBmb3VuZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZGVsZXRlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFnczogW1wiVGVzdFJlc3VsdHNcIl0sXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiRGVsZXRlIHRlc3QgcmVzdWx0IGJ5IGlkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgc3VtbWFyeTogXCJEZWxldGUgc2luZ2xlIHRlc3QgcmVzdWx0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDIwMDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiVGVzdCByZXN1bHQgaGFzIGJlZW4gZGVsZXRlZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NoZW1hOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHJlZjogXCIjZGVmaW5pdGlvbnMvVGVzdFJlc3VsdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDQwNDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiVGVzdCByZXN1bHQgbm90IGZvdW5kXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBwdXQ6IHtcclxuICAgICAgICAgICAgICAgICAgICB0YWdzOiBbXCJUZXN0UmVzdWx0c1wiXSxcclxuICAgICAgICAgICAgICAgICAgICBzdW1tYXJ5OiBcIlVwZGF0ZSB0ZXN0IHJlc3VsdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlVwZGF0ZSB0ZXN0IHJlc3VsdCBpbiB0aGUgc3lzdGVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1ldGVyczogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInRlc3QtcmVzdWx0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJUZXN0IHJlc3VsdCB0aGF0IHdlIHdhbnQgdG8gdXBkYXRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbjogXCJib2R5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjaGVtYToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRyZWY6IFwiI2RlZmluaXRpb25zL1VwZGF0ZVRlc3RSZXN1bHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBwcm9kdWNlczogW1wiYXBwbGljYXRpb24vanNvblwiXSxcclxuICAgICAgICAgICAgICAgICAgICByZXNwb25zZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMjAwOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJUZXN0IHJlc3VsdCBoYXMgYmVlbiB1cGRhdGVkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2hlbWE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkcmVmOiBcIiNkZWZpbml0aW9ucy9UZXN0UmVzdWx0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCIvcGF0aWVudHNcIjoge1xyXG4gICAgICAgICAgICAgICAgcG9zdDoge1xyXG4gICAgICAgICAgICAgICAgICAgIHRhZ3M6IFtcIlBhdGllbnRzXCJdLFxyXG4gICAgICAgICAgICAgICAgICAgIHN1bW1hcnk6IFwiQ3JlYXRlIG5ldyBwYXRpZW50XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiQ3JlYXRlIG5ldyBwYXRpZW50IGluIHRoZSBzeXN0ZW1cIixcclxuICAgICAgICAgICAgICAgICAgICBwYXJhbWV0ZXJzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwicGF0aWVudFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiUGF0aWVudCB0aGF0IHdlIHdhbnQgdG8gY3JlYXRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbjogXCJib2R5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjaGVtYToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRyZWY6IFwiI2RlZmluaXRpb25zL1BhdGllbnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBwcm9kdWNlczogW1wiYXBwbGljYXRpb24vanNvblwiXSxcclxuICAgICAgICAgICAgICAgICAgICByZXNwb25zZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMjAwOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJOZXcgcGF0aWVudCBoYXMgYmVlbiBjcmVhdGVkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2hlbWE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkcmVmOiBcIiNkZWZpbml0aW9ucy9QYXRpZW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBnZXQ6IHtcclxuICAgICAgICAgICAgICAgICAgICB0YWdzOiBbXCJQYXRpZW50c1wiXSxcclxuICAgICAgICAgICAgICAgICAgICBzdW1tYXJ5OiBcIkZpbmQgYWxsIHBhdGllbnRzIGZyb20gdGhlIHNlcnZlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkFsbCBwYXRpZW50c1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAyMDA6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIk9LXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjaGVtYToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRyZWY6IFwiI2RlZmluaXRpb25zL1BhdGllbnRzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCIvcGF0aWVudHMve2lkfVwiOiB7XHJcbiAgICAgICAgICAgICAgICBwYXJhbWV0ZXJzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImlkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluOiBcInBhdGhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiSWQgb2YgdGhlIHBhdGllbnRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJzdHJpbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBnZXQ6IHtcclxuICAgICAgICAgICAgICAgICAgICB0YWdzOiBbXCJQYXRpZW50c1wiXSxcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJGaW5kIHBhdGllbnQgYnkgaWRcIixcclxuICAgICAgICAgICAgICAgICAgICBzdW1tYXJ5OiBcIkZpbmQgc2luZ2xlIHBhdGllbnRcIixcclxuICAgICAgICAgICAgICAgICAgICByZXNwb25zZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMjAwOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJQYXRpZW50IGhhcyBiZWVuIGZvdW5kXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2hlbWE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkcmVmOiBcIiNkZWZpbml0aW9ucy9QYXRpZW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgNDA0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJQYXRpZW50IG5vdCBmb3VuZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZGVsZXRlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFnczogW1wiUGF0aWVudHNcIl0sXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiRGVsZXRlIHBhdGllbnQgYnkgaWRcIixcclxuICAgICAgICAgICAgICAgICAgICBzdW1tYXJ5OiBcIkRlbGV0ZSBzaW5nbGUgcGF0aWVudFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAyMDA6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlBhdGllbnQgaGFzIGJlZW4gZGVsZXRlZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NoZW1hOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHJlZjogXCIjZGVmaW5pdGlvbnMvUGF0aWVudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDQwNDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiUGF0aWVudCBub3QgZm91bmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHB1dDoge1xyXG4gICAgICAgICAgICAgICAgICAgIHRhZ3M6IFtcIlBhdGllbnRzXCJdLFxyXG4gICAgICAgICAgICAgICAgICAgIHN1bW1hcnk6IFwiVXBkYXRlIHBhdGllbnRcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJVcGRhdGUgcGF0aWVudCBpbiB0aGUgc3lzdGVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1ldGVyczogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInBhdGllbnRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlBhdGllbnQgdGhhdCB3ZSB3YW50IHRvIHVwZGF0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW46IFwiYm9keVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2hlbWE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkcmVmOiBcIiNkZWZpbml0aW9ucy9VcGRhdGVQYXRpZW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjZXM6IFtcImFwcGxpY2F0aW9uL2pzb25cIl0sXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDIwMDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiUGF0aWVudCBoYXMgYmVlbiB1cGRhdGVkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2hlbWE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkcmVmOiBcIiNkZWZpbml0aW9ucy9QYXRpZW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRlZmluaXRpb25zOiB7XHJcbiAgICAgICAgICAgIFRlc3RSZXN1bHQ6IHtcclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBbXCJuYW1lXCIsIFwiZGF0ZVwiLCBcInByaWNlXCIsIFwicGF0aWVudFwiXSxcclxuICAgICAgICAgICAgICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICBfaWQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidW5pcXVlSXRlbXNcIjogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0ZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJmb3JtYXRcIjogXCJkYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHByaWNlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImludGVnZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJmb3JtYXRcIjogXCJmbG9hdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aWVudDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgVXBkYXRlVGVzdFJlc3VsdDoge1xyXG4gICAgICAgICAgICAgICAgcHJvcGVydGllczoge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZm9ybWF0XCI6IFwiZGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBwcmljZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJudW1iZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJmb3JtYXRcIjogXCJmbG9hdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aWVudDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgVGVzdFJlc3VsdHM6IHtcclxuICAgICAgICAgICAgICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICBkb2NzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYXJyYXlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgJHJlZjogXCIjZGVmaW5pdGlvbnMvVGVzdFJlc3VsdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHRvdGFsOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJpbnRlZ2VyXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBwYWdlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJpbnRlZ2VyXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBwYWdlczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiaW50ZWdlclwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgbGltaXQgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJpbnRlZ2VyXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgUGF0aWVudDoge1xyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IFtcImZpcnN0TmFtZVwiLCBcImxhc3ROYW1lXCIsIFwiZGF0ZU9mQmlydGhcIiwgXCJwZXNlbFwiLCBcImVtYWlsXCIsIFwicGhvbmVOb1wiXSxcclxuICAgICAgICAgICAgICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICBfaWQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidW5pcXVlSXRlbXNcIjogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZmlyc3ROYW1lOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBsYXN0TmFtZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0ZU9mQmlydGg6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZm9ybWF0XCI6IFwiZGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBwZXNlbDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJpbnRlZ2VyXCJcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBwaG9uZU5vOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImludGVnZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgUGF0aWVudHM6IHtcclxuICAgICAgICAgICAgICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICBkb2NzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYXJyYXlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgJHJlZjogXCIjZGVmaW5pdGlvbnMvUGF0aWVudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBVcGRhdGVQYXRpZW50OiB7XHJcbiAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlyc3ROYW1lOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBsYXN0TmFtZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0ZU9mQmlydGg6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZm9ybWF0XCI6IFwiZGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBwZXNlbDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJpbnRlZ2VyXCJcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBwaG9uZU5vOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImludGVnZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBhcGlzOiBbXCJhcHAuanNcIl1cclxufTtcclxuXHJcbmNvbnN0IHN3YWdnZXJEb2NzID0gc3dhZ2dlckpzRG9jKHN3YWdnZXJPcHRpb25zKTtcclxuYXBwLnVzZSgnL2FwaS1kb2NzJywgc3dhZ2dlclVpLnNlcnZlLCBzd2FnZ2VyVWkuc2V0dXAoc3dhZ2dlckRvY3MpKTtcclxuXHJcbnNldEdsb2JhbE1pZGRsZXdhcmUoYXBwKTtcclxuXHJcbmFwcC51c2UoJy9hcGknLCByZXN0Um91dGVyKTtcclxuYXBwLnVzZSgocmVxLCByZXMsIG5leHQpID0+IHtcclxuICAgIGNvbnN0IGVycm9yID0gbmV3IEVycm9yKCdOb3QgZm91bmQnKTtcclxuICAgIGVycm9yLm1lc3NhZ2UgPSAnSW52YWxpZCByb3V0ZSc7XHJcbiAgICBlcnJvci5zdGF0dXMgPSA0MDQ7XHJcbiAgICBuZXh0KGVycm9yKTtcclxufSlcclxuXHJcbmFwcC51c2UoKGVycm9yLCByZXEsIHJlcywgbmV4dCkgPT4ge1xyXG4gICAgcmVzLnN0YXR1cyhlcnJvci5zdGF0dXMgfHwgNTAwKTtcclxuICAgIHJldHVybiByZXMuanNvbih7XHJcbiAgICAgICAgZXJyb3I6IHtcclxuICAgICAgICAgICAgbWVzc2FnZTogZXJyb3IubWVzc2FnZVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KTtcclxuXHJcbmFwcC5saXN0ZW4oUE9SVCwgKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coYFNlcnZlciBpcyBydW5uaW5nIGF0IHBvcnQgJHtQT1JUfWApO1xyXG59KTsiXX0=