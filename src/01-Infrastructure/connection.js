// connection.js
const mongoose = require("mongoose");
const connection = "mongodb://localhost:27017/WunderdogLinkShortener";
const connectDb = () => {
    return mongoose.connect(connection, {useUnifiedTopology: true, useNewUrlParser: true});
};
module.exports = connectDb;