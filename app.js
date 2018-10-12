const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const customerRoute = require('./routes/customer');
const categoryRoute = require('./routes/category');
const Customer = require('./models').Customer;
app.use(morgan('dev'));

app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json());

app.use('/customer',customerRoute);
app.use('/category', categoryRoute);
module.exports = app;