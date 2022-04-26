var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var session = require('express-session')
var i18n=require("i18n-express"); 
var app = express();

require('./db')
require('./middlewares').useMiddlewares(express, app , path , session, cookieParser, i18n)

app.listen(3000,()=>console.log('Listening port on 3000'))