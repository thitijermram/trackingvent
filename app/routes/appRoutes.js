'use strict';
module.exports = function(app) {
  var todoList = require('https://trackingvent.000webhostapp.com/vent/appController.js');

  // todoList Routes
  app.route('/customer')
    .get(todoList.list_all_customer);
   
  app.route('/customer/:customerId')
    .get(todoList.read_a_customer);
  
  app.route('/customer/:customerId/:customerPass')
    .get(todoList.read_a_login);
};
