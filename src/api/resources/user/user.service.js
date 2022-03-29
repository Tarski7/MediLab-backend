import Joi from 'joi';

export default {
    validateSchema(body) {
        const schema = Joi.object().keys({
            email: Joi.string().email().required(),
            password: Joi.string().required()
        });

        const { error, value } = schema.validate(body);
        if (error && error.details) {
            return { error };
        }

        return { value };
    }
}