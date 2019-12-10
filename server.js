const express = require('express');

const PostRouter = require('./posts/post-router.js');

const server = express();

server.use(express.json());

server.use('/budget', PostRouter);

server.get('/', (req, res) => {
  res.send('<h3>SQL MONDAY PROJECT</h3>');
});

module.exports = server;