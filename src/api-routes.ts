// import { builtinModules } from "module";

let router = require('express').Router();

// default api response
router.get('/', (request: any, response: any) =>{
  response.json({
    status: 'API is working',
    message: 'Welcome to the API I am making.'
  });
});

module.exports = router;