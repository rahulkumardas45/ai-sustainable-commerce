const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({

    name:String,
    description:String,
    category:String,
    subcategory:String,
    tags:[String],
    sustainability_filters:[String]

})

module.exports = mongoose.model("Product",productSchema)