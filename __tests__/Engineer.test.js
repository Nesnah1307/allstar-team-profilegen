const Engineer = require("../lib/Engineer");

test("Set GitHub", () => {
  const github = "GitHubStar";
  const allstarEngineer = new Engineer("Mack", 0513, "Nesnah@hans.com", github);
  expect(allstarEngineer.github).toBe(github);
});

test("Pull GitHubStar", () => {
  const github = "GitHubStar";
  const allstarEngineer = new Engineer("Brandie", 0605, "Eidnarb@hans.net", github);
  expect(allstarEngineer.getGithub()).toBe(github);
});