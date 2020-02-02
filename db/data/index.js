const ENV = "test";
console.log(ENV);
const test = require("./test-data/");
console.log("test data", test);
const development = require("./development-data");

const data = { test, development, production: development };
console.log(data[ENV]);
module.exports = data[ENV];
