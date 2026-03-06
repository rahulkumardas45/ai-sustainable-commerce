const mongoose = require("mongoose")

const aiLogSchema = new mongoose.Schema({

prompt: String,
response: String,

created_at:{
 type:Date,
 default:Date.now
}

})

module.exports = mongoose.model("AiLog", aiLogSchema)