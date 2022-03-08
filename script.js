const fs = require('fs')

let generatedCards = []

function writeHTML() {
    fs.writeFile('./dist/index.html', `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Squad Games</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">
            <link rel="stylesheet" href="./style.css">
        </head>
        <body>
            <main>
                ${generatedCards.join('\n')}
            </main>
        </body>
        </html>`, (err) =>
        err
          ? console.error(err)
          : console.log(
              `Was unable to write this to the file system`)

          )        
}

          function employeeCard(employee) {
            generatedCards.push(`<div class="card col-lg-3 col-md-5 col-sm-8" style="width: 18rem;">
            <div class="card-header">
              ${employee.getRole()}
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Employee ID: ${employee.getId()}</li>
              <li class="list-group-item">Name: ${employee.getName()}</li>
              <li class="list-group-item">Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
              <li class="list-group-item">${employee.getRoleItem()}</li>
            </ul>
          </div>`)
        }

        module.exports = {
            employeeCard,
            writeHTML
        }