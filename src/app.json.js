const express = require('express');
const app = express();

const mongoose = require('mongoose');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const hostname = '0.0.0.0';
const port = 200;

//const postRoute = require('./api/Routes/postRoute');
//const commentRoute = require('./api/Routes/commentRoute');
//postRoute(app);
//commentRoute(app);

mongoose.Promise = global.Promise;
const mongooseParams = {
    useUnifiedTopology : true,
    useNewUrlParser : true,
    useCreateIndex : true
};

mongoose.connect('mongodb://localhost:27017/apinodeipssi', mongooseParams);

app.listen(port, hostname);