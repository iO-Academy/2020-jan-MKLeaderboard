const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./Config/routes');
const app = express();

app.use(cors());
app.use(bodyParser.json());

routes(app);

module.exports = app;