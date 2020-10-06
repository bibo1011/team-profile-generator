const generateHTML = teamArray => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
        <style>
            header {
                background-color: blueviolet;
                margin: 0;
                padding: 50px;
                text-align: center;
            }
            body {
                background-color: darkblue;
            }
            .row {
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                margin-top: 20px;
                margin-bottom: 20px;
            }
            .card {
                padding: 15px;
                border-radius: 6px;
                background-color: white;
                color: lightskyblue;
                margin: 15px;
            }
            .text {
                padding: 15px;
                border-radius: 6px;
                background-color: lightskyblue;
                color: black;
                margin: 15px;
            }
            .col {
                flex: 1;
                text-align: center;
            }
        </style>
    </head>
    <body>
        <header>
            <H1>My Team</H1>
        </header>
        <div class='row'>
            <div class="card bg-dark justify-content-center align-items-center" style="width: 18rem;">
                    <div class="col card-header">
                        <h4>${teamArray.name}</h4>
                    </div>
                    <div class="col card-header">
                        <h4>${teamArray.role}</h4 >
                    </div >
                    <ul class="list-group list-group-flush text">
                        <li class="list-group-item">ID: ${teamArray.id}</li>
                        <li class="list-group-item">Email: <a href=mailto: ${teamArray.email}</a></li>
                        <li class="list-group-item"> ${teamArray.name}</li>
                    </ul>
            </div > 
        </div>
    </body>
    </html>
    `
}
module.exports = generateHTML;
