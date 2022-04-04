const generateTeam = team => {


    const generateManager = manager => {
        return ` 
        <div class="allstar">
        <div class="allstar-header">
            <h2 class="card-title">${manager.getName()}</h2>
            <h3 class="card-title">${manager.getRole()}</h3>
        </div>
        <div class="allstar-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${manager.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}"></a></li>
                <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
            </ul>
        </div>
    </div>
        `;
    };

    const generateEngineer = engineer => {
        return `
            <div class="allstar">
        <div class="allstar-header">
            <h2 class="card-title">${engineer.getName()}</h2>
            <h3 class="card-title">${engineer.getRole()}</h3>
        </div>
        <div class="allstar-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${engineer.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}"></a></li>
                <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}"</a></li>
            </ul>
        </div>
    </div>
        `;
    };

    const generateIntern = intern => {
        return `
        <div class="allstar">
    <div class="allstar-header">
        <h2 class="card-title">${intern.getName()}</h2>
        <h3 class="card-title">${intern.getRole()}</h3>
    </div>
    <div class="allstar-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${intern.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}"></a></li>
            <li class="list-group-item">School: ${intern.getSchool()}</li>
        </ul>
    </div>
</div>
        `;
    };


    const allStarArr = [];

    allStarArr.push(team
        .filter(employee => employee.getRole() === 'Manager')
        .map(manager => generateManager(manager))
    );
    allStarArr.push(team
        .filter(employee => employee.getRole() === 'Engineer')
        .map(engineer => generateEngineer(engineer))
        .join("")
    );
    allStarArr.push(team
        .filter(employee => employee.getRole() === 'Intern')
        .map(intern => generateIntern(intern))
        .join("")
    );

    return allStarArr.join("");
};


module.exports = team => {

    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>My Team</title>
   <link rel="stylesheet" href="style.css">
</head>

<body>
    <div class="container">
        ${generateTeam(team)}
    </div>

</body>
</html>
    `;
};