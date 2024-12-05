"use strict";

const { log } = require("node:console");

const http = require("http");

const { host, port } = require("./config.json");

const { getAllCars,
    getAllModels,
    getCar } = require("./car_storage");


const server = http.createServer((req, res) => {
    const { pathname, searchParams } =
        new URL(`http://${req.headers.host}${req.url}`);

    const route = decodeURIComponent(pathname);

    let resultHtml = "";
    if (route === "/") {
        resultHtml = createMessagePage("Use cars,models or search")
    }
    else if (route === "/cars") {// Route is what is showed in the browsers URL
        resultHtml = createCarsHtml(getAllCars());
    }
    else if (route === "/models") {// Route is what is showed in the browsers URL
        resultHtml = createModelsList(getAllModels());
    }
    else if (route === "/search") {// Route is what is showed in the browsers URL
        if (searchParams.has("key") && searchParams.has("value")) {
            const key = searchParams.get("key");
            const value = searchParams.get("value");
            resultHtml = createCarsHtml(getCar(key, value))
        } else {
            resultHtml = createMessagePage(`no route ${route}`);
        }
    }
    res.writeHead(200, {
        "Content-Type": "text/html"
    });
    res.end(resultHtml);
});

server.listen(port,host,()=>console.log(`Server ${server}:${port} is serving...`));

function createCarsHtml(carsArray) {
    let htmlString =
        `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Cars</title>
    <style>
    table,td,th{border:solid 1px black;}
    body{background-color:cyan;}
    </style>
</head>
<body>
    <h1>Search Result:</h1>`;
    if (carsArray.length === 0) {
        htmlString += "<h2>No Cars Found</h2>"
    } else {
        htmlString += `<table>
        <thead>
            <tr><th>Model</th><th>License</th></tr>
        </thead>
        <tbody>`;
        for(const car of carsArray){
            htmlString+= `<tr><td>${car.model}</td><td>${car.license}</td></tr>`
        }
        htmlString+="</tbody></table>";
    htmlString+="</body></html>";

    }
    return htmlString;
}

function createModelsList(models) {
    let htmlString =
        `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Car Models</title>
        </head>
        <body>
            <h1>Car Models:</h1>
            <ul>
                <li>${models.join("</li>\n<li>")}</li>
            </ul>
        </body>
        </html>`;
    return htmlString
}

function createMessagePage(message) {
    let htmlString =
        `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Info</title>
</head>
<body>
    <h1>Message</h1>
    <p>${message}</p>
</body>
</html>`
    return htmlString
}