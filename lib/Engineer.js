// import employee constructor
const Employee = require("./Employee");

// create engineer class inherting and extending employee class
class Engineer extends Employee {

  // engineer constructor with name, ID, email and GitHub
  constructor (name, id, email, github) {
    super (name, id, email);
    this.github = github;
  };

  // get role method will overwrite parent and return engineer
  getRole () {
    return "Engineer";
  };

  // github method will return github
  getGithub () {
    return this.github;
  };
};

// export engineer class
module.exports = Engineer;
