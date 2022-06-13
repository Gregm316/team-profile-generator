// import classes for team
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern'); 

// link generate HTML
const generateHTML = require('./src/generateHTML');

// import modules
const fs = require('fs'); 
const inquirer = require('inquirer');
const { off } = require('process');

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
        if  (isNaN(nameInput)) {
            console.log ("Please enter the manager's ID!")
            return false; 
        } else {
            return true;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: "Enter the manager's email.",
      validate: email => {
        valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
        if (valid) {
          return true;
          } else {
              console.log ('Please enter an email!')
              return false; 
          }
      }
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: "Enter manager's office number",
      validate: nameInput => {
        if (isNaN(nameInput)) {
            console.log ('Please enter an office number!')
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

}

