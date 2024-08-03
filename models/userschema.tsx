import mongoose, { Schema , Model, Document} from 'mongoose';
 export type UserDoc  = Document & {
    id: string;
    name:string;
    email:string;
    password:string;
    exists:boolean;

}
export type UserInput ={
 id:UserDoc['id'];
 name:UserDoc["name"];
 email:UserDoc["email"];
 password:UserDoc["password"]
 exists:UserDoc["exists"];
}
const UserSchema  =new Schema({
id:{
    type:Schema.Types.String,
    required:true,
    unique:true
},
name: {
    type: Schema.Types.String,
    required: true,
  },
  email: {
    type: Schema.Types.String,
    required: true,
    unique: true,
  },
  password: {
    type: Schema.Types.String,
    required: true,
  },
  enabled: {
    type: Schema.Types.Boolean,
    default: true,
  },
}
, {
    collection: 'users',
    timestamps: true,
  },

);
export const User:Model<UserDoc> =mongoose.model<UserDoc>('User',UserSchema);
