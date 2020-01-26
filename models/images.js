const mongoose = require('mongoose')

const imagesSchema = new mongoose.Schema({
    selectedImages :{
        type : Array,
        required: true
    },
    date : {
        type : Date,
        required : true,
        default : Date.now
    }
})

module.exports = mongoose.model("BestPhotoes",imagesSchema )