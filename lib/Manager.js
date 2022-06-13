// import employee constructor
const Employee = require('./Employee');

// create manager class inherting and extending employee class
class Manager extends Employee {

  // manager contructor with name, ID, email, and office number
  constructor (name, id, email, officeNumber) {
    super (name,id, email);
    this.officeNumber = officeNumber;
  };

  // get role method will overwrite parent and return manager
  getRole () {
    return "Manager";
  };

  // get office number method returns office number
  getOfficeNumber () {
    return this.officeNumber;
  };
}; 

// export manager class
module.exports = Manager; 

