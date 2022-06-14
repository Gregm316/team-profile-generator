// Employee constructor
const Employee = require("../lib/Employee");

// create employee object with name, email, employee ID, role
test("create employee object", () => {
  const employee = new Employee("Greg", 150, "gregm316@gmail.com");

  expect(employee.name).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
});

// test get employee name
test("get employee name", () => {
  const employee = new Employee("Greg", 150, "gregm316@gmail.com");

  expect(employee.getName()).toEqual(expect.stringContaining(employee.name.toString()));
});

// test get ID
test("get employee ID", () => {
  const employee = new Employee("Greg", 150, "gregm316@gmail.com");

  expect(employee.getId()).toEqual(expect.any(Number));
});

// test get email
test("get employee email", () => {
  const employee = new Employee("Greg", 150, "gregm316@gmail.com");

  expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

// test get role
test("get employee role", () => {
  const employee = new Employee("Greg", 150, "gregm316@gmail.com");

  expect(employee.getRole()).toEqual("Employee");
});
