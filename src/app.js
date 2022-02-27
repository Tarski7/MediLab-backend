import express from 'express';
import mongoose from 'mongoose';
import { router } from './config/routes';
import logger from 'morgan';

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/medilab');

const app = express();
const PORT = 3000;

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
                    description: "API for Test results"
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
            }
        },
        definitions: {
            TestResult: {
                required: ["name", "date", "price"],
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
                    }
                }
            },
            TestResults: {
                properties: {
                    docs: {
                        type: "array",
                        $ref: "#definitions/TestResult"
                    }
                }
            }
        }
    },
    apis: ["app.js"],
    /*definitions: {
        TestResult: {
            required: ["name", "date", "price"],
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
                    "type": "string"
                },
                description: {
                    "type": "string",
                    "format": "date"
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
                }
            }
        },
        TestResults: {
            type: "array",
            $ref: "#definitions/TestResult"
        }
    }*/
};

app.use(express.json());
app.use(express.urlencoded());
app.use(logger('dev'));

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use('/api', router);
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