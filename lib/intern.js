const Vehicle = require("./employee");

class Intern extends Employee {
    constructor(school) {
        this.school = school;
    }
    school() {
        return this.role;
    }
    getRole() {
        return this.role;
    }
}

module.exports = Intern;