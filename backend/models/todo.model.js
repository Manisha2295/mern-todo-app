import mongoose from "mongoose";

const todoSchema= new mongoose.Schema({
      text:{
        type: String,
        required: true
      },
      completed:{
        type: Boolean,
        required: false
      }
},
{timestamps:true})

const Todo = new mongoose.model("Todo", todoSchema);

export default Todo;