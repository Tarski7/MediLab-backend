import TestResult from "../models/test-result.model";
import Joi from 'joi';
import HttpStatus from 'http-status-codes';

export default {
    findAll(req, res, next) {
        const { page = 1, perPage = 10 } = req.query;
        const options = {
            page: parseInt(page, 10),
            limit: parseInt(perPage, 10)
        };

        TestResult.paginate({}, options).then(testResults => res.json(testResults))
            .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(err));
    },

    create(req, res, next) {
        const schema = Joi.object().keys({
            name: Joi.string().required(),
            date: Joi.date().required(),
            price: Joi.number().required(),
            description: Joi.string().optional()
        });
        
        const { error, value } = schema.validate(req.body);
        if (error && error.details) {
            return res.status(HttpStatus.BAD_REQUEST).json(error);
        }

        TestResult.create(value)
            .then(testResult => res.json(testResult))
            .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(err));
    },

    findOne(req, res) {
        let {id} = req.params;
        TestResult.findById(id)
            .then(testResult => {
                if (!testResult) {
                    return res.status(HttpStatus.NOT_FOUND).json({err: 'Test result not found'});
                }

                return res.json(testResult);
            })
            .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(err));
    },

    delete(req, res) {
        let {id} = req.params;
        TestResult.findByIdAndRemove(id)
            .then(testResult => {
                if (!testResult) {
                    return res.status(HttpStatus.NOT_FOUND).json({err: 'Test result not found'});
                }

                return res.json(testResult);
            })
            .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(err));
    },

    update(req, res) {
        let {id} = req.params;
        const schema = Joi.object().keys({
            name: Joi.string().optional(),
            date: Joi.date().optional(),
            price: Joi.number().optional(),
            description: Joi.string().optional()
        });
        
        const { error, value } = schema.validate(req.body);
        if (error && error.details) {
            return res.status(HttpStatus.BAD_REQUEST).json(error);
        }

        TestResult.findOneAndUpdate({_id: id}, value, {new: true})
            .then(testResult => res.json(testResult))
            .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(err));
    }
}