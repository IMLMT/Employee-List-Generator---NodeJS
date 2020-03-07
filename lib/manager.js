const Vehicle = require("./employee");

class Manager extends Employee {
    constructor(officeNumber) {
        this.officeNumber = officeNumber;
    }
    getRole() {
        return this.role;
    }
}

module.exports = Manager;