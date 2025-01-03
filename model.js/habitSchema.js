import mongoose from "mongoose";

const habitSchema = mongoose.Schema({
    name:{type:String,required:true},
    userId:{type:mongoose.Schema.Types.ObjectId,ref:'User',Default:null}
})

export const Habit = mongoose.model("Habit",habitSchema);