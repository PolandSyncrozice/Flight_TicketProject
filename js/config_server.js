var express = require("express");
var app = express();
var fs = require("fs");

app.get("/index.html", function(req, res) {
  fs.readFile(process.cwd() + "/" + "index.html", "utf8", function(err, data) {
    res.end(data);
  });
});

app.get("/", function(req, res) {
  fs.readFile(process.cwd() + "/" + "index.html", "utf8", function(err, data) {
    res.end(data);
  });
});

app.get("/tab.html", function(req, res) {
  fs.readFile(process.cwd() + "/" + "tab.html", "utf8", function(err, data) {
    res.end(data);
  });
});

app.get("/slip.html", function(req, res) {
  fs.readFile(process.cwd() + "/" + "slip.html", "utf8", function(err, data) {
    res.end(data);
  });
});

app.get("/payment.html", function(req, res) {
  fs.readFile(process.cwd() + "/" + "payment.html", "utf8", function(
    err,
    data
  ) {
    res.end(data);
  });
});

app.get("/js/search.js", function(req, res) {
  fs.readFile(process.cwd() + "/js/" + "search.js", "utf8", function(
    err,
    data
  ) {
    res.end(data);
  });
});

app.get("/js/strategyPattern.js", function(req, res) {
  fs.readFile(process.cwd() + "/js/" + "strategyPattern.js", "utf8", function(
    err,
    data
  ) {
    res.end(data);
  });
});

app.get("/js/toPayment.js", function(req, res) {
  fs.readFile(process.cwd() + "/js/" + "toPayment.js", "utf8", function(
    err,
    data
  ) {
    res.end(data);
  });
});

app.get("/js/toSliper.js", function(req, res) {
  fs.readFile(process.cwd() + "/js/" + "toSliper.js", "utf8", function(
    err,
    data
  ) {
    res.end(data);
  });
});

var server = app.listen(8080, function() {
  var host = server.address().address;
  var port = server.address().port;
});

console.log(
  "Static file server running at\n  => http://localhost:8080" +
    "/\nCTRL + C to shutdown"
);
