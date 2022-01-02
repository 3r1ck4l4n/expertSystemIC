const TestData= require("../model/testData");
const certainFactor = require("../middleware/CertainFactorCalculator");
const testController = {
    sendTest: (req, res) => {
        let test = TestData.readTest();
        res.render('test', {test: test});
    },
    resolveTest: (req, res) => {
        let factors=[];
        factors.push(parseFloat(req.body.question1));
        factors.push(parseFloat(req.body.question2));
        factors.push(parseFloat(req.body.question3));
        factors.push(parseFloat(req.body.question4));
        factors.push(parseFloat(req.body.question5));
        factors.push(parseFloat(req.body.question6));
        factors.push(parseFloat(req.body.question7));
        factors.push(parseFloat(req.body.question8));
        factors.push(parseFloat(req.body.question9));
        factors.push(parseFloat(req.body.question10));
        factors.push(parseFloat(req.body.question11));
        factors.push(parseFloat(req.body.question12));
        factors.push(parseFloat(req.body.question13));
        factors.push(parseFloat(req.body.question14));
        factors.push(parseFloat(req.body.question15));
        factors.push(parseFloat(req.body.question16));
        factors.push(parseFloat(req.body.question17));
        factors.push(parseFloat(req.body.question18));
        factors.push(parseFloat(req.body.question19));
        factors.push(parseFloat(req.body.question20));
        factors.push(parseFloat(req.body.question21));
        
        console.log(factors);
        let cf = certainFactor(factors);
        
        console.log(cf);
        
        res.render('resultTest', {result:cf});
    }
}

module.exports = testController;