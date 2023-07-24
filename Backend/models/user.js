const mongoose = require ('mongoose')
const user= new mongoose.Schema({
    firstname:{
        type:String,
        required:true,
    },
    lastname:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    
    password:{
       type:String,
       required:true
    },
    gender:{
        type:String,
        required:true
    }, 
    profileImage:{
        type:String
    },

  role:{
    type:String,
    required:true
  },
    skills:[
        {type:String}
    ]
        

    
})
module.exports = mongoose.model('user',user);