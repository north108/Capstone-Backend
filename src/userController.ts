import { userInfo } from "os";
import {Request, Response} from 'express';

const User = require('./userModel');

// index
exports.index = (request: Request, response: Response) => {
  User.get((error: any, users: any) => {
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
}

// new
exports.new = (request: Request, response: Response) => {
  let user = new User();
  user.firstName = request.body.firstName ? request.body.firstName : user.fistName;
  user.location = request.body.location;
  user.email = request.body.email;
  user.password = request.body.password;

  user.save((error: any) => {
    if (error) {
      response.json(error);
    } else {
      response.json({
        message: 'New user created!',
        data: user
      });
    }
  });
}