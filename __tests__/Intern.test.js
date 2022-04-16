const Intern = require("../lib/Intern");

test("Set school", () => {
  const school = "University of Lemoncello";
  const allstarIntern = new Intern("Mack", 12, "Mack@bananas.com", school);
  expect(allstarIntern.school).toBe(school);
});

test("Pull school", () => {
  const school = "University of Cheetos";
  const allstarIntern = new Intern("Brandie", 67, "Brandie@coffee.org", school);
  expect(allstarIntern.getSchool()).toBe(school);
});