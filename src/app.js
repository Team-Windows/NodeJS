const express = require('express');
const app = express();

const mongoose = require('mongoose');
const cors = require('cors');
app.use(cors());
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const hostname = '0.0.0.0';
const port = 2000;

const groupRoute = require('./api/Routes/groupRoute');
groupRoute(app);
const userRoute = require('./api/Routes/userRoute');
userRoute(app);

mongoose.Promise = global.Promise;
const mongooseParams = {
    useUnifiedTopology : true,
    useNewUrlParser : true,
    useCreateIndex : true
};

mongoose.connect('mongodb://localhost:27017/windows', mongooseParams);

app.listen(port, hostname);