const http = require('http');
const express = require('express');
const _404 = require('./controllers/404');
const productRoutes = require('./routes_/product');
const userRoutes = require('./routes_/users');


const app = express();

app.set('views', 'views_');
app.set('view engine', 'ejs');

app.use(productRoutes);
app.use(userRoutes);

app.use(_404.notFound);

http.createServer(app).listen(3_000);