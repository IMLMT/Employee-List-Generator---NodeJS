const Vehicle = require("./employee");

class Engineer extends Employee {
    constructor(github) {
        this.github = github;
    }
    getGithub() {
        return this.github;
    }
    getRole() {
        return this.role;
    }
}

module.exports = Engineer;