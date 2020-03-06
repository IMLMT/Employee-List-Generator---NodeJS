var obj1 = [];
var obj2 = [];
var obj3 = [];

class Employee {
    constructor(name, id, title) {
        this.name = name;
        this.id = id;
        this.title = title;
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
            return this.role;
        } // Returns 'Employee'
}

class Manager extends Employee {
    constructor(officeNumber) {
        this.officeNumber = officeNumber;
    }
    getRole() {
        return this.role;
    }
}

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