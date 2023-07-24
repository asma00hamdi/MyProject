const mongoose = require ('mongoose')
const post = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    body:{
        type:String,
        required:true,
    },
    contactUs:{
        type:String,
        required:true,
    },
    creatorId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    createdAt:{
        type:Date,
        default:Date.now
      },
      hourly:{
        type:Number,
      }
    
    
})
module.exports = mongoose.model('post',post);