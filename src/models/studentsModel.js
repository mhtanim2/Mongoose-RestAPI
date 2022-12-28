const mongoose=require('mongoose');

const studentBody=mongoose.Schema(
    {
        name: {type:String,required: true},
        roll: {type:String,unique:true},//adding validation
        class:String,
        ranking:{type:String,default:"NA"},

        gmail:{type:String,required:true,unique:true,validate:{
            validator:(v)=>{
                return /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(v);
            }
        }},
        
        phone:{type:String,validate:{
            validator:(v)=>{
                if (v.length ===11) {
                    return true;
                } else {
                    return false;
                }
            },message:"Enter 11 digit BD number"
        }},

        grade:{type:String},
        courses:[String],
        data:{type:Date, default:Date.now}
    },{versionKey:false}
);

const Students=mongoose.model('students',studentBody);
module.exports=Students;
