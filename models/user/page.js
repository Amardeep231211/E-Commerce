import mongoose, { Schema } from 'mongoose'

const UserSchma=new Schema({
    userName:{
        type:String,
        required:true
    },
    userEmail:{
        type:String,
        required:true
    },
    userPassword:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true,
        default:"user",
        enum:["user","admin","root"]
    }
},
{
    timestamps:true
})

export default mongoose.models.User||mongoose.model('User',UserSchma)