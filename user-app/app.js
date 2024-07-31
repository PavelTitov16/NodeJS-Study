const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use('/add-product', (req, res, next) => {
    console.log('Second');
    res.send('<form action="product" method="POST"><input type="text" name="title"><button type="Submit">Submit</button></form>');
});

app.use('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

app.use('/', (req, res, next) => {
    console.log('Always runs');
    res.send('<h1>Hello Express</h1>');
});

app.listen(3000);
