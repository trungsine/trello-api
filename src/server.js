// const express = require("express");
import express from "express";

const app = express();

const hostname = "localhost";
const port = 8024;

app.get("/", function (req, res) {
  res.send("<h1>Hello NodeJs</h1>");
});

app.listen(port, hostname, () => {
  console.log(`Hello NodeJs, Running server at https://${hostname}:${port}`);
});
