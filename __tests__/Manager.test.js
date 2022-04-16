const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Set number", () => {
  const cell = 13;
  const allstarManager= new Manager("MackDizzle", 1307, "Mack@Nes.com", cell);
  expect(allstarManager.cell).toBe(cell);
});

test("Pull number", () => {
  const cell = 13;
  const allstarManager = new Manager("Brandizzle", 0713, "Brandie@Nes.org", org);
  expect(allstarManager.cell()).toBe(cell);
});