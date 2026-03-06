const mongoose = require("mongoose")

const impactSchema = new mongoose.Schema({

product:String,
quantity:Number,

plastic_saved:Number,
carbon_avoided:Number,

impact_statement:String,

created_at:{
type:Date,
default:Date.now
}

})

module.exports = mongoose.model("Impact",impactSchema)