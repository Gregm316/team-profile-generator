// import classes for team
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern'); 

// link generate HTML
const generateHTML = require('./src/generateHTML');

// import modules
const fs = require('fs'); 
const inquirer = require('inquirer');
// const { off } = require('process');

// empty array for team 
const teamArray = []; 

// function to create manager
const addManager = () => {
  return inquirer.prompt ([
    {
      type: "input",
      name: "name",
      message: "Who is the team manager?",
      validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log ("Please enter manager name!");
            return false; 
        }
    }
    },
    {
      type: 'input',
      name: 'id',
      message: "Please enter manager ID.",
      validate: nameInput => {
        if  (isNaN(nameInput)) {
            console.log ("Please enter numeric manager ID number!")
            return false; 
        } else {
            return true;
        }
    }
    },
    {
      type: "input",
      name: "email",
      message: "Enter the manager's email",
      validate: email => {
        valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
        if (valid) {
            return true;
        } else {
            console.log ('Please enter email!')
            return false; 
        }
    }
    },
    {
      type: "input",
      name: "officeNumber",
      message: "Enter manager's office number",
      validate: nameInput => {
        if  (isNaN(nameInput)) {
            console.log ('Please enter office number!')
            return false; 
        } else {
            return true;
        }
    }
    }
  ])
  .then(managerInput => {
    const { name, id, email, officeNumber } = managerInput;
    const manager = new Manager (name, id, email, officeNumber);

    teamArray.push(manager);
    console.log(manager);
  })
};

// function to create employee
const addEmployee = () => {
  return  inquirer.prompt ([
    {
      type: "list",
      name: "role",
      message: "Select employee's role",
      choices: ["Engineer", "Intern"]
    },
    {
      type: "input",
      name: "name",
      message: "What is the employee's name?",
      validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log ("Please enter emaployee name!");
            return false; 
        }
    }
    },
    {
      type: 'input',
      name: 'id',
      message: "Please enter the employee's ID.",
      validate: nameInput => {
        if  (isNaN(nameInput)) {
            console.log ("Please enter employee ID!")
            return false; 
        } else {
            return true;
        }
    }
    },
    {
      type: "input",
      name: "email",
      message: "Enter the employee's email",
      validate: email => {
        valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
        if (valid) {
            return true;
        } else {
            console.log ('Please enter email!')
            return false; 
        }
    }
    },
    {
      type: "input",
      name: "github",
      message: "Enter empoyee's GitHub username",
      when: (input) => input.role === "Engineer",
      validate: nameInput => {
        if (nameInput ) {
            return true;
        } else {
            console.log ("Please enter github username!")
        }
    }
    },
    {
      type: "input",
      name: "school",
      message: "Enter the name intern's school",
      when: (input) => input.role === "Intern",
      validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log ("Please enter school name!")
        }
    }
    },
    {
      type: "confirm",
      name: "confirmAddEmployee",
      message: "Would you like to add more members to your team?",
      default: false
    }
  ])
  .then(employeeData => {
    let { name, id, email, role, github, school, confirmAddEmployee } = employeeData;
    let employee;

    if (role === "Engineer") {
      employee = new Engineer (name, id, email, github);
      console.log(employee);
    } else if (role === "Intern") {
      employee = new Intern (name, id, email, school);
      console.log(employee);
    };

    teamArray.push(employee);

    if (confirmAddEmployee) {
      return addEmployee(teamArray);
    } else {
      return teamArray;
    }
  })
};

// function to generate HTML
const writeFile = data => {
  fs.writeFile("./dist/index.html", data, err => {
    if (err) {
      console.log(err);
      return;
    } else {
      console.log("Your team profile has been created!")
    }
  })
};

addManager()
  .then(addEmployee)
  .then(teamArray => {
    return generateHTML(teamArray);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .catch(err => {
  console.log(err);
  });
