// Manager constructor
const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

// create manager object with office number
test("create manager object", () => {
  const manager = new Manager("Greg", 150, "gregm316@gmail.com", 10);

  expect(manager.officeNumber).toEqual(expect.any(Number));
});

// test get role
test("get employee role", () => {
  const manager = new Manager("Greg", 150, "gregm316@gmail.com");

  expect(manager.getRole()).toEqual("Manager");
});

// test get office number
test("get office number", () => {
  const manager = new Manager("Greg", 150, "gregm316@gmail.com", 10);
  
  expect(manager.getOfficeNumber()).toEqual(expect.any(Number));
});
