// create employee class with constructor including name, ID and email
class Employee {
  constructor (name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  };

  // get name method that returns name
  getName () {
    return this.name;
  };

  // get ID method that returns ID
  getId () {
    return this.id;
  };

  // get email methos that returns email
  getEmail () {
    return this.email;
  };

  // get role methos that returns role
  getRole () {
    return "Employee";
  };
};

// export employee class
module.exports = Employee;

