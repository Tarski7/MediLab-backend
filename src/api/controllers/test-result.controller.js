const testResults = [
    { _id: "1", name: "Morfologia", date: new Date() },
    { _id: "2", name: "Spirometria", date: new Date() },
    { _id: "3", name: "Test antygenowy Covid-19", date: new Date() }
];

export default {
    findAll(req, res, next) {
        res.json(testResults);
    }
}