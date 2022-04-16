const Engineer = require("../lib/Engineer");

test("Set GitHub", () => {
  const github = "github@github";
  const allstarEngineer = new Engineer("Mack", 5513, "Nesnah@hans.com", github);
  expect(allstarEngineer.github).toBe(github);
});

test("Pull GitHubStar", () => {
  const github = "github@github";
  const allstarEngineer = new Engineer("Brandie", 6605, "Eidnarb@hans.net", github);
  expect(allstarEngineer.getGithub()).toBe(github);
});