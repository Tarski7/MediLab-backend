import TestResult from "./test-result.model";
import Joi from 'joi';
import HttpStatus from 'http-status-codes';
import testResultService from "./test-result.service";
import userService from "../user/user.service";

export default {
    findAll(req, res, next) {
        const { page = 1, perPage = 10, filter, sortField, sortDir } = req.query;
        const options = {
            page: parseInt(page, 10),
            limit: parseInt(perPage, 10),
            populate: 'patient'
        };

        const query = {};
        if (filter) {
            query.name = {
                $regex: filter
            };
        }
        if (sortField && sortDir) {
            options.sort = {
                [sortField]: sortDir
            }
        }
        console.log(options);
        TestResult.paginate(query, options).then(testResults => res.json(testResults))
            .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(err));
    },

    create(req, res, next) {
        const schema = Joi.object().keys({
            name: Joi.string().required(),
            date: Joi.date().required(),
            price: Joi.number().required(),
            description: Joi.string().optional(),
            patient: Joi.string().required()
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
            .populate('patient')
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
            description: Joi.string().optional(),
            patient: Joi.string().optional()
        });
        
        const { error, value } = schema.validate(req.body);
        if (error && error.details) {
            return res.status(HttpStatus.BAD_REQUEST).json(error);
        }

        TestResult.findOneAndUpdate({_id: id}, value, {new: true})
            .then(testResult => res.json(testResult))
            .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(err));
    },

    async download(req, res) {
        try {
            const {id} = req.params;
            const testResult = await TestResult.findById(id).populate('patient');
            if (!testResult) {
                return res.status(HttpStatus.NOT_FOUND).send({err: 'Could not find any test result'});
            }

            const user = userService.getUser(req.currentUser);

            const templateBody = testResultService.getTemplateBody(testResult, user);
            const html = testResultService.getTestResultTemplate(templateBody);

            res.pdfFromHTML({
                filename: `${testResult.name}.pdf`,
                htmlContent: html
            });
        } catch(err) {
            console.error(err);
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}