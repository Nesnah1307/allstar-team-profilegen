const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Set cell", () => {
  const cell = 13;
  const allstarManager= new Manager("MackDizzle", 1307, "Mack@Nes.com", cell);
  expect(allstarManager.officeNumber).toBe(cell);
});

test("pullCell", () => {
  const cell = 13;
  const allstarManager = new Manager("Brandizzle", 671, "Brandie@Nes.org", cell);
  expect(allstarManager.getOfficeNumber()).toBe(cell);
});