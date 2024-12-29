<<<<<<< HEAD
import express from 'express';
import { mapOrder } from '~/utils/sorts.js';

const app = express();

const hostname = 'localhost';
const port = 8017;

app.get('/', (req, res) => {
  // Test Absolute import mapOrder
  console.log(
    mapOrder(
      [
        { id: 'id-1', name: 'One' },
        { id: 'id-2', name: 'Two' },
        { id: 'id-3', name: 'Three' },
        { id: 'id-4', name: 'Four' },
        { id: 'id-5', name: 'Five' },
      ],
      ['id-5', 'id-4', 'id-2', 'id-3', 'id-1'],
      'id'
    )
  );
  res.end('<h1>Hello World!</h1><hr>');
});

app.listen(port, hostname, () => {
  // eslint-disable-next-line no-console
  console.log(`Hello Trung Sine Dev, I am running at ${hostname}:${port}/`);
=======
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
>>>>>>> b2de7205219e6051b2649571aa348079a67c0892
});
