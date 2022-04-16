const Employee = require("../lib/Employee");

test("Add employee", () => {
    const allstar = new Employee();
    expect(typeof (allstar)).toBe("object");
});

test("Set name", () => {
    const name = "Mack";
    const allstarName = new Employee(name);
    expect(allstarName.name).toBe(name);
});

test("Pulls names", () => {
    const name = "Brandie";
    const allstarName = new Employee(name);
    expect(allstarName.getName()).toBe(name);
});

test("Set email", () => {
    const email = "Mack@nes.org";
    const allstarEmail = new Employee("Mack", 23, email);
    expect(allstarEmail.email).toBe(email);
});

test("Pulls email", () => {
    const email = "Mack@nes.net";
    const allstarEmail = new Employee("Mack", 13, email);
    expect(allstarEmail.getEmail()).toBe(email);
});

test("Set id", () => {
    const id = 6750;
    const allstarId = new Employee("Brandie", id);
    expect(allstarId.id).toBe(id);
});


test("Pull id", () => {
    const id = 6605;
    const allstarId = new Employee("Mack", 6605, id);
    expect(allstarId.getId()).toBe(id);
});
