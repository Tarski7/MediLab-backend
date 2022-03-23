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
    }
}