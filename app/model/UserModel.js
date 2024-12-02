import mongoose from 'mongoose'

const UserModelSchema = mongoose.Schema({
    email: {type: String, unique: true, required: true},
    name: {type: String},
    password: {type: String, required: true}
}, {timestamps: true, versionKey: false})

const UsersModel = mongoose.model("Users", UserModelSchema)
export default UsersModel;