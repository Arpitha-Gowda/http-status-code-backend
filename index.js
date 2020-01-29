const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

app.use(cors());

//Status codes
let statusCode = {
    "100":"100 (Continue)",
    "101":"101 (Switching Protocols)",
    "200":"200 (OK)",
    "201":"201 (Created)",
    "202":"202 (Accepted)",
    "203":"203 (Non-Authoritative Information)",
    "204":"204 (No Content)",
    "205":"205 (Reset Content)",
    "207":"207 (Multi-Status)",
    "300":"300 (Multiple Choices)",
    "301":"301 (Moved Permanently)",
    "302":"302 (Found)",
    "303":"303 (See Other)",
    "305":"305 (Use Proxy)",
    "307":"307 (Temporary Redirect)",
    "400":"400 (Bad Request)",
    "402":"402 (Payment Required)",
    "403":"403 (Forbidden)",
    "404":"404 (Not Found)",
    "405":"405 (Method Not Allowed)",
    "406":"406 (Not Acceptable)",
    "408":"408 (Request Timeout)",
    "409":"409 (Conflict)",
    "410":"410 (Gone)",
    "411":"411 (Length Required)",
    "413":"413 (Payload Too Large)",
    "414":"414 (URI Too Long)",
    "415":"415 (Unsupported Media Type)",
    "417":"417 (Expectation Failed)",
    "426":"426 (Upgrade Required)",
    "500":"500 (Internal Server Error)",
    "501":"501 (Not Implemented)",
    "502":"502 (Bad Gateway)",
    "503":"503 (Service Unavailable)",
    "504":"504 (Gateway Timeout)",
    "505":"505 (HTTP Version Not Supported)",
}

// define a simple route
app.get('/status', (req, res) => {
    console.log(req.query.code)
    res.status(req.query.code).send({"message": statusCode[req.query.code]})

    // res.status(201).json({"message": "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes."});
});

// listen for requests
app.listen(4000, () => {
    console.log("Server is listening on port 4000");
});
