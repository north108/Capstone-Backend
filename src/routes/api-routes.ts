// import { builtinModules } from "module";

import {Request, Response} from 'express';

let router = require('express').Router();

// default api response
router.get('/', (request: Request, response: Response) =>{
  response.json({
    status: 'API is working',
    message: 'Welcome to the API I am making.'
  });
});

module.exports = router;