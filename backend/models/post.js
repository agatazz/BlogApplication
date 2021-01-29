const mongoose = require('mongoose')

const {ObjectId}=mongoose.Schema


const postSchema=new mongoose.Schema({
    title:{
        type:String,
        trim:true,
        min:3,
        max:200,
        required:true
    },
    slug:{
        type:String,
        unique:true,
        index:true,
        lowercase:true

    },
    content:{
        type:{},
        required:true,
        min:3,
        max:2000000
    },
    user:{
        type:String,
        default:'Admin'
    }
},{timestamps:true});

module.exports=mongoose.model('Post',postSchema);