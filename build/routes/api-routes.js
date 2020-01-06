"use strict";
// import { builtinModules } from "module";
Object.defineProperty(exports, "__esModule", { value: true });
var router = require('express').Router();
// default api response
router.get('/', function (request, response) {
    response.json({
        status: 'API is working',
        message: 'Welcome to the API I am making.'
    });
});
module.exports = router;
