"use strict";
// import { builtinModules } from "module";
var router = require('express').Router();
// default api response
router.get('/', function (request, response) {
    response.json({
        status: 'API is working',
        message: 'Welcome to the API I am making.'
    });
});
module.exports = router;
