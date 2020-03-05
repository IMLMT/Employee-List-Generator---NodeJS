const inquirer = require("inquirer");
const fs = require("fs");
// const axios = require("axios");
const util = require("util");



var arrayData = [];

const writeFileAsync = util.promisify(fs.writeFile);
const appendFileAsync = util.promisify(fs.appendFile);


function promptUserEngineer(data) {
    inquirer.prompt([{
            type: "input",
            name: `name`,
            message: `What is your ${data.mtype}'s name ?`
        },
        {
            type: "input",
            name: `id`,
            message: `What is your ${data.mtype}'s id ?`
        },
        {
            type: "input",
            name: `email`,
            message: `What is your ${data.mtype}'s email ?`,
        },
        {
            type: "input",
            name: `gh`,
            message: `What is your ${data.mtype}'s GitHub username ?`,
        }
    ]).then(function(data) {
        var obj = { "Name": `${ data.name }`, "ID": `${ data.id }`, "Email": `${ data.email }`, "GitHub": `${ data.gh }` }
        arrayData.push(obj);
        console.log(obj);
        promptChoice()
    })
}

function promptUserIntern(data) {
    inquirer.prompt([{
            type: "input",
            name: `name`,
            message: `What is your ${data.mtype}'s name ?`
        },
        {
            type: "input",
            name: `id`,
            message: `What is your ${data.mtype}'s id ?`
        },
        {
            type: "input",
            name: `email`,
            message: `What is your ${data.mtype}'s email ?`,
        },
        {
            type: "input",
            name: `school`,
            message: `What is your ${data.mtype}'s school ?`,
        }
    ]).then(function(data) {
        var obj = { "Name": `${ data.name }`, "ID": `${ data.id }`, "Email": `${ data.email }`, "School": `${ data.school }` }
        arrayData.push(obj);
        console.log(obj);
        promptChoice()
    })
}

function promptUserManager() {
    console.log("Please build your team");
    inquirer.prompt([{
            type: "input",
            name: "name",
            message: "What is your manager's name ?"
        },
        {
            type: "input",
            name: "id",
            message: "What is your manager's id ?"
        },
        {
            type: "input",
            name: "email",
            message: "What is your manager's email ?"
        },
        {
            type: "input",
            name: "office",
            message: "What is your manager's office number ?"
        }
    ]).then(function(data) {
        var obj = { "Name": `${ data.name }`, "ID": `${ data.id }`, "Email": `${ data.email }`, "Office": `${ data.office }` }
        arrayData.push(obj);
        // console.log(obj);
        promptChoice()
    })
}

function promptChoice() {
    inquirer.prompt([{
        type: "list",
        name: "mtype",
        message: "Which type of team member would you like to add (Choose 'None' to exit) ?",
        choices: [
            "Engineer",
            "Intern",
            "None"
        ]
    }]).then(function(data) {
        if (data.mtype === "None") {
            generateHTML().then(function() {
                console.log("here");
                console.log(arrayData);
                stringifiedArray = JSON.stringify(arrayData);
                writeFileAsync("script.js", `var arrayData = ${stringifiedArray}`);
            })
        } else if (data.mtype === "Engineer") {
            promptUserEngineer(data)
        } else if (data.mtype === "Intern") {
            promptUserIntern(data)
        }
    })
}

async function generateHTML() {
    // console.log(arrayData);
    writeFileAsync("index.html", `<!DOCTYPE HTML>
    <html lang="en" style="width:100%; height:100%;">
    
    <head>
        <meta http-equiv="content-type" content="text/html; charset=utf-8">
        <title>Read-Me PDF</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
        <script defer src="index.js"></script>
        <script defer src="script.js"></script>
        <script defer src="scriptLogic.js"></script>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    
    <body>
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 class="display-4">My Company's Employee List</h1>
                <p class="lead">This is a list of employees in my company. Enter the Manager's ID as 001 to be labeled as a 'Supervisor' in the system. Engineers and Interns are labelled accordingly !</p>
            </div>
        </div>
    
        <div class="container">
            <div class="row">`, (err) => {
        if (err) throw err;
    }).then(function() {
        for (var i = 0; i < arrayData.length; i++) {
            appendFileAsync("index.html", `<div class="col-xs-4">
                <div class="card" style="width: 18rem; margin: 10px">
                    <div class="card-body">
                        <h5 class="card-title" id="name${i}">Manager Name</h5>
                        <p1 class="card-text" id="id${i}">manager's id</p1><br>
                        <p2 class="card-text" id="email${i}">manager's email</p2><br>
                        <p3 class="card-text" id="unique${i}">manager's office number</p3><br>
                    </div>
                </div>
            </div>`, (err) => {
                if (err) throw err;
            })
        }
    }).then(function() {
        appendFileAsync("index.html", `</div>
                </div>
            </body>

            </html>`, (err) => {
            if (err) throw err;
        })
    })
}

promptUserManager()