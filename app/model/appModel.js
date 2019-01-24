'use strict';
var sql = require('./db.js');

//Customer object constructor
var Customer = function(customer){
    this.customer = customer.customer;
    this.customer = customer.status;
    this.created_at = new Date();
};

Customer.getCustomerById = function getCustomerById(customerId, result) {
        sql.query("Select Cus_FName,Cus_LName from customer where Cus_ID = ? ", customerId, function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};

Customer.getCustomerByIdPass = function getCustomerByIdPass(customerId,customerPass, result) {
    sql.query("Select Cus_FName,Cus_LName from customer where Cus_ID = ? and Cus_Password = ?", [customerId,customerPass], function (err, res) {             
            if(err) {
                console.log("error: ", err);
                result(err, null);
            }
            else{
                result(null, res);
          
            }
        });   
};

Customer.getAllCustomer = function getAllCustomer(result) {
        sql.query("Select * from customer", function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('tasks : ', res);  

                 result(null, res);
                }
            });   
};

module.exports= Customer;
