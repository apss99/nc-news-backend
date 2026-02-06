/*
const http = require("node:http");
const db = require("./db/connection.js");

const server = http.createServer((request, response) => {
  const { method, url } = request;
  console.log("METHOD:", method, Object.keys(request), "URL:", url);
  if (method === "GET" && url === "/api") {
    response.statusCost = 200; // status code
    response.setHeader("content-type", "application/json"); //headers - this tells you what is going to be received
    response.write(JSON.stringify({ message: "Hello from server" })); //responses should always be sent with meaningful keys so they can be interpreted unambiguously
    response.end();
  }
  if (method === "GET" && url === "/api/articles") {
    console.log("let's get some news");
    return db.query(`SELECT * FROM articles`).then(({ rows }) => {
      console.log(rows, "<< rows in if block/ back from db.query");
      response.statusCode = 200;
      response.setHeader("content-type", "application/JSON");
      response.write(JSON.stringify({ news: rows }));
      response.end();
    });
  }
  if (method === "POST" && url === "/api/articles") {
    // get hold of article to be posted
    console.log(Object.keys(request));
    request.on("data", (packet) => {
      console.log(packet);
    });
    request.on("end", () => {
        body += packet
      console.log(body);
      += 
    });
    // insert into database
    // send response to client
  }
});
/*
server.listen(9090, () => {
  console.log("listening on 9090");
});
*/
/*
const express = require("express");
const app = express();
const db = require("./db/connection");
const port = 9497;

app.get("/api", (request, response) => {
  return db.query(`SELECT * FROM books`);
  response.status(200).send({ message: "hello from EXPRESS server" }); // <= with express setting headers is inferred and send combines the response.write and end and stringifies it
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
*/
