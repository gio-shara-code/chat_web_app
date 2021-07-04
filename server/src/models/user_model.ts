import {model, Schema, Document} from "mongoose"
import {User} from "../interfaces/user"
//When creating a document

const userSchema = new Schema({
  email: {type: String, required: true, unique: true},
  name: {type: String, required: true},
  password: {type: String, required: true},
  createdOn: {type: Number, required: true}
})

export default model<User & Document>("User", userSchema)