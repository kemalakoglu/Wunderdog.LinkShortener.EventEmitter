const mongoose = require("mongoose");
const linkSchema = new mongoose.Schema({
    longUrl: {
        type: String
    },
    link: {
        type: String
    },
    createdAt:{
        type: Date
    }
});
const LinkModel = mongoose.model("link", linkSchema);
module.exports = LinkModel;