const express = require('express'),
app = express(),
bodyParser = require('body-parser'),
port = process.env.PORT || 3000;

const mysql = require('mysql');
// connection configurations
const db = mysql.createConnection({
    host: 'localhost',
    user: 'id7769008_thiti7600',
    password: 'dew28433',
    database: 'id7769008_trackingventilator'
});
 
// connect to database
db.connect();

app.listen(port);

console.log('API server started on: ' + port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./app/routes/appRoutes.js'); //importing route
routes(app); //register the route
