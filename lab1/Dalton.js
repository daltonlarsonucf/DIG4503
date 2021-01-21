const Person = require("./Person.js");

class Dalton extends Person {
    constructor(name, color) {
        super(name, color);
    }
}

module.exports = Dalton;