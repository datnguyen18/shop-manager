const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const customerRoute = require('./api/routes/customer');
const categoryRoute = require('./api/routes/category');
const productRoute = require('./api/routes/product');
const orderRoute = require('./api/routes/order');
const orderItemRoute = require('./api/routes/order_item');
app.use(morgan('dev'));

app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json());

app.use('/customer',customerRoute);
app.use('/category', categoryRoute);
app.use('/product', productRoute);
app.use('/order',orderRoute);
app.use('/order-item',orderItemRoute);
module.exports = app;