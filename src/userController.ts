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

// create
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

// show
exports.update = (request: Request, response: Response) => {
  User.findById(request.params.user_id, (error: any, user: any) => {
    if (error) {
      response.send(error);
    } else {
      response.json({
        message: 'User details',
        data: user
      });
    }
  });
}

// update
exports.update = (request: Request, response: Response) => {
  User.findById(request.params.user_id, (error: any, user: any) => {
    if(error) {
      response.send(error);
    }
    user.name = request.body.name ? request.body.name : user.name;
    user.location = request.body.location;
    user.email = request.body.email;
    user.password = request.body.password;

    user.save((error: any) => {
      if (error) {
        response.json(error);
      } else {
        response.json({
          message: 'User Info updated.',
          data: user
        });
      }
    });
  });
}

// delete

exports.delete = (request: Request, response: Response) => {
  User.remove({
    _id: request.params.user_id
  }, (error: any, user: any) => {
    if (error) {
      response.send(error);
    } else {
      response.json({
        status: 'success',
        message: 'Contact deleted'
      });
    }
  });
}