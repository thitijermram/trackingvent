'user strict';

var mysql = require('mysql');

//local mysql db connection
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'id7769008_thiti7600',
    password : 'dew28433',
    database : 'id7769008_trackingventilator'
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;
