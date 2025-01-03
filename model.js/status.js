
import mongoose from "mongoose";

  let statusSchema = mongoose.Schema({
    habit:{type:mongoose.Schema.Types.ObjectId,ref:"Habit",required:true},
    date:{type:Date,required:true},
    status:{type:String,enum:["Done","Not Done","None"],default:"None"}
  })

  const Status = mongoose.model("Status",statusSchema)
  export default Status;


