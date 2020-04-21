const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./Config/routes');
const app = express();
const cors = require('cors');

app.use(cors());

app.use(bodyParser.json());

routes(app);

module.exports = app;