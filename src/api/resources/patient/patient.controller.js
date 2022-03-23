import patientService from "./patient.service"
import HttpStatus from 'http-status-codes';
import Patient from './patient.model';

export default {
    async create(req, res) {
        try {
            const { value, error } = patientService.validateCreateSchema(req.body);

            if (error && error.details) {
                return res.status(HttpStatus.BAD_REQUEST).json(error);
            }

            const patient = await Patient.create(value);
            return res.json(patient);
        } catch(err) {
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(err);
        }
    },

    async findAll(req, res) {
        try {
            const patients = await Patient.find();
            return res.json(patients);
        } catch(err) {
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(err);
        }
    },

    async findOne(req, res) {
        try {
            const patient = await Patient.findById(req.params.id);
            if (!patient) {
                return res.status(HttpStatus.NOT_FOUND).json({err: 'Patient not found'});
            }
            return res.json(patient);
        } catch(err) {
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(err);
        }
    },

    async delete(req, res) {
        try {
            const patient = await Patient.findOneAndRemove({_id: req.params.id});
            if (!patient) {
                return res.status(HttpStatus.NOT_FOUND).json({err: 'Could not delete patient'});
            }
            return res.json(patient);
        } catch(err) {
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(err);
        }
    }
}