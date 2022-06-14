// import employee constructor
const Employee = require("./Employee");

// create intern class inheriting and extending employee class
class Intern extends Employee {

  // create intern constructor with name, ID, email and school
  constructor (name, id, email, school) {
    super (name, id, email);
    this.school = school;
  };

  // get role method will overwrite parent and return intern
  getRole () {
    return "Intern";
  };

  // get school method returns school
  getSchool () {
    return this.school;
  };
};

// export intern class
module.exports = Intern;
