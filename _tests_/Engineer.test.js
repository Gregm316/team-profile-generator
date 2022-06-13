// Engineer constructor
const Engineer = require("../lib/Engineer");

// create engineer object with github and role
test("create engineer object", () => {
  const engineer = new Engineer("Greg", 150, "gregm316@gmail.com", "Gregm316");

  expect(engineer.github).toEqual(expect.any(String));
});

// test get role
test("get employee role", () => {
  const engineer = new Engineer("Greg", 150, "gregm316@gmail.com", "Gregm316");

  expect(engineer.getRole()).toEqual("Engineer");
});

// test get github
test("get engineers github", () => {
  const engineer = new Engineer("Greg", 150, "gregm316@gmail.com", "Gregm316");
  
  expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});
