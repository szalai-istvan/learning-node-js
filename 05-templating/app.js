const http = require('http');
const express = require('express');
const productRoutes = require('./routes_/product');
const userRoutes = require('./routes_/users');


const app = express();
app.use(productRoutes);
app.use(userRoutes);

app.use((req, res, next) => {
    res.status(404).send('<h1>404 - Page not found</h1>')
});

http.createServer(app).listen(3_000);