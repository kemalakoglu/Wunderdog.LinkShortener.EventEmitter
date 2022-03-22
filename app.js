const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const _ = require('lodash');
const app = express();
const port = 8081;
const bodyParser = require('body-parser');
const deleteLinkConsumer = require('./src/04-Presentation/EventEmitters/link.shortener.delete.link.consumer');
const createLinkConsumer = require('./src/04-Presentation/EventEmitters/link.shortener.create.link.consumer');
const connectDb = require('./src/01-Infrastructure/connection');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});

connectDb().then(() => {
    console.log("MongoDb connected");
  });

deleteLinkConsumer().catch((err) => {
	console.error("error in consumer: ", err)
})

createLinkConsumer().catch((err) => {
	console.error("error in consumer: ", err)
})

module.exports = app;