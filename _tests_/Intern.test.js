// Intern constructor
const Intern = require("../lib/Intern");

// create intern object with school 
test("create intern object", () => {
  const intern = new Intern("Greg", 150, "gregm316@gmail.com", "Rutgers");

  expect(intern.school).toEqual(expect.any(String));
});

// test get role
test("get employee role", () => {
  const intern = new Intern("Greg", 150, "gregm316@gmail.com", "Rutgers");

  expect(intern.getRole()).toEqual("Intern");  
});

// test get school
test("get employee school", () => {
  const intern = new Intern("Greg", 150, "gregm316@gmail.com", "Rutgers");

  expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});
