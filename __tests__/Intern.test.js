const Intern = require("../lib/Intern");

test("Set school", () => {
  const elementary = "University of Lemoncello";
  const allstarIntern = new Intern("Mack", 12, "Mack@bananas.com", elementary);
  expect(allstarIntern.elementary).toBe(elementary);
});

test("Pull school", () => {
  const elementary = "University of Cheetos";
  const allstarIntern = new Intern("Brandie", 07, "Brandie@coffee.org", elementary);
  expect(allstarIntern.getElementary()).toBe(elementary);
});