import express from 'express';
import mongoose from 'mongoose';
import { restRouter } from './api';
import { setGlobalMiddleware } from './api/middlewares/global-middleware';
import { devConfig } from './config/env/development';

mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://localhost/${devConfig.database}`);

const app = express();
const PORT = devConfig.port;

const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: "MediLab API Documentation",
            description: "Swagger API Documentation for MediLab App",
            contact: {
                name: "me"
            },
            servers: ["http://localhost:3000"],
            tags: [
                { 
                    name: "TestResults",
                    description: "API for test results"
                },
                { 
                    name: "Patients",
                    description: "API for patients"
                },
                { 
                    name: "Users",
                    description: "API for users"
                }
            ],
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
                    parameters: [
                        {
                            name: "test-result",
                            description: "Test result that we want to create",
                            in: "body",
                            required: true,
                            schema: {
                                $ref: "#definitions/TestResult"
                            }
                        },
                        {
                            name: "authorization",
                            description: "Access token to authorize the user",
                            in: "header",
                            type: "string",
                            required: true
                        }
                    ],
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
                    parameters: [
                        {
                            name: "page",
                            type: "integer",
                            description: "Set the page for pagination",
                            in: "query"
                        },
                        {
                            name: "perPage",
                            type: "integer",
                            description: "Set the limit for the records",
                            in: "query"
                        },
                        {
                            name: "filter",
                            type: "string",
                            description: "Filter the test results by name",
                            in: "query"
                        },
                        {
                            name: "sortField",
                            type: "string",
                            description: "Define the sortField for sorting i.e. name, date, price",
                            in: "query"
                        },
                        {
                            name: "sortDir",
                            type: "string",
                            description: "Define the sortDir i.e. desc, asc",
                            in: "query"
                        },
                        {
                            name: "authorization",
                            description: "Access token to authorize the user",
                            in: "header",
                            type: "string",
                            required: true
                        }
                    ],
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
                parameters: [
                    {
                        name: "id",
                        in: "path",
                        description: "Id of the test result",
                        type: "string"
                    },
                    {
                        name: "authorization",
                        description: "Access token to authorize the user",
                        in: "header",
                        type: "string",
                        required: true
                    }
                ],
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
                    parameters: [
                        {
                            name: "test-result",
                            description: "Test result that we want to update",
                            in: "body",
                            required: true,
                            schema: {
                                $ref: "#definitions/UpdateTestResult"
                            }
                        }
                    ],
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
                    parameters: [
                        {
                            name: "patient",
                            description: "Patient that we want to create",
                            in: "body",
                            required: true,
                            schema: {
                                $ref: "#definitions/Patient"
                            }
                        },
                        {
                            name: "authorization",
                            description: "Access token to authorize the user",
                            in: "header",
                            type: "string",
                            required: true
                        }
                    ],
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
                    parameters: [
                        {
                            name: "authorization",
                            description: "Access token to authorize the user",
                            in: "header",
                            type: "string",
                            required: true
                        }
                    ],
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
                parameters: [
                    {
                        name: "id",
                        in: "path",
                        description: "Id of the patient",
                        type: "string"
                    },
                    {
                        name: "authorization",
                        description: "Access token to authorize the user",
                        in: "header",
                        type: "string",
                        required: true
                    }
                ],
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
                    parameters: [
                        {
                            name: "patient",
                            description: "Patient that we want to update",
                            in: "body",
                            required: true,
                            schema: {
                                $ref: "#definitions/UpdatePatient"
                            }
                        }
                    ],
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
            },
            "/users/signup": {
                post: {
                    tags: ["Users"],
                    summary: "Create new account",
                    description: "Create new user in the system",
                    parameters: [
                        {
                            name: "user",
                            description: "User that we want to create",
                            in: "body",
                            required: true,
                            schema: {
                                $ref: "#definitions/SignupUser"
                            }
                        }
                    ],
                    produces: ["application/json"],
                    responses: {
                        200: {
                            description: "Signup successful",
                            schema: {
                                $ref: "#definitions/UserSignupRsp"
                            }
                        }
                    }
                }
            },
            "/users/login": {
                post: {
                    tags: ["Users"],
                    summary: "Login into account",
                    description: "Login user in the system",
                    parameters: [
                        {
                            name: "user",
                            description: "User credentials",
                            in: "body",
                            required: true,
                            schema: {
                                $ref: "#definitions/User"
                            }
                        }
                    ],
                    produces: ["application/json"],
                    responses: {
                        200: {
                            description: "Login successful",
                            schema: {
                                $ref: "#definitions/UserLoginRsp"
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
                limit : {
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
            },
            User: {
                required: ["email", "password"],
                properties: {
                    _id: {
                        "type": "string",
                        "uniqueItems": true
                    },
                    email: {
                        "type": "string"
                    },
                    password: {
                        "type": "string"
                    }
                }
            },
            UserSignupRsp: {
                properties: {
                    success: {
                        "type": "boolean"
                    },
                    message: {
                        "type": "string"
                    }
                }
            },
            UserLoginRsp: {
                properties: {
                    success: {
                        "type": "boolean"
                    },
                    token: {
                        "type": "string"
                    }
                }
            },
            SignupUser: {
                required: ["email", "password", "name"],
                properties: {
                    _id: {
                        "type": "string",
                        "uniqueItems": true
                    },
                    email: {
                        "type": "string"
                    },
                    password: {
                        "type": "string"
                    },
                    name: {
                        "type": "string"
                    }
                }
            },
        }
    },
    apis: ["app.js"]
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

setGlobalMiddleware(app);

app.use('/api', restRouter);
app.use((req, res, next) => {
    const error = new Error('Not found');
    error.message = 'Invalid route';
    error.status = 404;
    next(error);
})

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    return res.json({
        error: {
            message: error.message
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
});