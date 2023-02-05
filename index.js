const list = require("../country/state/city/index");
const getFirstNames = require("../utilities/utils/index");
const getPeopleInCity = (list) => getFirstNames(list);
console.log(getPeopleInCity(list));
module.exports = getPeopleInCity;
