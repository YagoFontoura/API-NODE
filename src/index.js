require('dotenv').config({ path: './src/database/.env' });
const express = require('express');
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

require('./controllers/authController.js')(app);
require('./controllers/projectController')(app);

app.listen(3000);


