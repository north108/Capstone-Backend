"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = require('./userModel');
// index
exports.index = function (request, response) {
    User.get(function (error, users) {
        if (error) {
            response.json({
                status: 'error',
                message: error,
            });
        }
        response.json({
            status: 'Success',
            message: 'Users retrieved successfully',
            data: users
        });
    });
};
// create
exports.new = function (request, response) {
    var user = new User();
    user.firstName = request.body.firstName ? request.body.firstName : user.fistName;
    user.location = request.body.location;
    user.email = request.body.email;
    user.password = request.body.password;
    user.save(function (error) {
        if (error) {
            response.json(error);
        }
        else {
            response.json({
                message: 'New user created!',
                data: user
            });
        }
    });
};
// show
exports.update = function (request, response) {
    User.findById(request.params.user_id, function (error, user) {
        if (error) {
            response.send(error);
        }
        else {
            response.json({
                message: 'User details',
                data: user
            });
        }
    });
};
// update
exports.update = function (request, response) {
    User.findById(request.params.user_id, function (error, user) {
        if (error) {
            response.send(error);
        }
        user.name = request.body.name ? request.body.name : user.name;
        user.location = request.body.location;
        user.email = request.body.email;
        user.password = request.body.password;
        user.save(function (error) {
            if (error) {
                response.json(error);
            }
            else {
                response.json({
                    message: 'User Info updated.',
                    data: user
                });
            }
        });
    });
};
// delete
exports.delete = function (request, response) {
    User.remove({
        _id: request.params.user_id
    }, function (error, user) {
        if (error) {
            response.send(error);
        }
        else {
            response.json({
                status: 'success',
                message: 'Contact deleted'
            });
        }
    });
};
