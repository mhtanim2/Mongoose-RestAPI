const mongoose=require('mongoose');

const studentBody=mongoose.Schema(
    {
        name: String,
        roll: String,
        class:String,
        ranking:String,
    }
);

const Students=mongoose.model('students',studentBody);
module.exports=Students;
