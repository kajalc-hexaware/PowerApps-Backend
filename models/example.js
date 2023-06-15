const mongoose=require('mongoose')

const exampleSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    place:{
        type:String,
        required:true,
        trim:true
    },
    animal:{
        type:String,
        required:true,
        trim:true
    }

})

const Example=mongoose.model('Example',exampleSchema)

module.exports=Example