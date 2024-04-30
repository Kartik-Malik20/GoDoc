import mongoose from "mongoose";


const DoctorSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    phoneNumber:{
        type:Number,
        required:true
    },
    clinicName:{
        type:String,
        required:true
    },
    clinicAddress:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    zipCode:{
        type:String,
        required:true
    }
});

const DoctorModel = mongoose.model('Doctor', DoctorSchema);

export {DoctorModel as Doctor}