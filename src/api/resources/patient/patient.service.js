import Joi from 'joi';

export default {
    validateCreateSchema(body) {
        const schema = Joi.object().keys({
            firstName: Joi.string().required(),
            lastName: Joi.string().required(),
            dateOfBirth: Joi.date().required(),
            pesel: Joi.number().required(),
            email: Joi.string().email().required(),
            phoneNo: Joi.number().required()
        });

        const { error, value } = schema.validate(body);
        if (error && error.details) {
            return { error };
        }

        return { value };
    },

    validateUpdateSchema(body) {
        const schema = Joi.object().keys({
            firstName: Joi.string().optional(),
            lastName: Joi.string().optional(),
            dateOfBirth: Joi.date().optional(),
            pesel: Joi.number().optional(),
            email: Joi.string().email().optional(),
            phoneNo: Joi.number().optional()
        });

        const { error, value } = schema.validate(body);
        if (error && error.details) {
            return { error };
        }

        return { value };
    }
}