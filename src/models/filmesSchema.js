const mongoose = require('mongoose');
const filmesSchema = mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId, 
    title:{
        type: String,
        required:true
    },
    year:{
        type: Number,
        required: true
    },
    genre:{
        type:String,
        required:true

    }, 
    createdAt:{
        type: String,
        default: new Date(), 
    },
})

module.exports = mongoose.model('filmes', filmesSchema)