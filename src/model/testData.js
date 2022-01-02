const fs = require("fs");
const path = require("path");

const TestData = {
    filename: path.join(__dirname,"../data/testData.json"),
    readTest: function (){
        return JSON.parse(fs.readFileSync(this.filename, "utf-8"));
    }
}

console.log(TestData.readTest());

module.exports = TestData;

