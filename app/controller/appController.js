'use strict';

var Customer = require('../model/appModel.js');

exports.list_all_customer = function(req, res) {
  Customer.getAllCustomer(function(err, customer) {
    console.log('controller')
    if (err)
      res.send(err);
      console.log('res', customer);
    res.send(customer);
  });
};

exports.read_a_customer = function(req, res) {
    Customer.getCustomerById(req.params.customerId, function(err, customer) {
      if (err)
        res.send(err);
      res.json(customer);
    });
};

exports.read_a_login = function(req, res) {
    Customer.getCustomerByIdPass(req.params.customerId, req.params.customerPass, function(err, customer) {
      if (err)
        res.send(err);
      res.json(customer);
    });
};
