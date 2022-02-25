import TestResult from "../models/test-result.model";

const testResults = [
    { _id: "1", name: "Morfologia", date: new Date() },
    { _id: "2", name: "Spirometria", date: new Date() },
    { _id: "3", name: "Test antygenowy Covid-19", date: new Date() }
];

export default {
    findAll(req, res, next) {
        res.json(testResults);
    },
    create(req, res) {
        let {name, date, price, description} = req.body;
        if (!name) {
            return res.status(400).json({err: 'name is required field'});
        }
        if (!date) {
            return res.status(400).json({err: 'date is required field'});
        }
        if (!price) {
            return res.status(400).json({err: 'price is required field'});
        }
        
        TestResult.create({name, date, price, description})
            .then(testResult => res.json(testResult))
            .catch(err => res.status(500).json(err));
    }
}