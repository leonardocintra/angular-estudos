const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const Product = require('./model/product');

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors);

mongoose.connect(
    'mongodb://localhost:27017/appcrud',
    {
        useNewUrlParser: true
    }
);

let myLooger = function (req, res, next) {
    console.log(req.body);
    next();
}
app.use(myLooger);

app.get('/product', (req, res) => {
    Product.find().lean().exec(
        (err, prods) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(200).send(prods);
            }
        }
    );
});

app.use(function (req, res, next) {
    res.status(404).send('Route does not exist.');
});

app.listen(9000);