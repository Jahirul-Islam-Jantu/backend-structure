import UsersModel from "../model/UserModel.js";
import {EncodeToken} from "../utilities/TokenUtilities.js";

export const UserRegistraion = async (req, res) => {
    try{
        let reqBody = req.body;
        let user = await UsersModel.create(reqBody);
        if (user){
            res.status(201).json({user: user});
        }else {
            res.status(401).json({error: "User creation failed"});
        }
    }catch(err){
        res.status(400).json({message:"Authentication failed"});
    }
}
export const UserLogin = async (req, res) => {
    try{
        let reqBody = req.body;
        let user = await UsersModel.findOne(reqBody)
        if (user){
            const Token = EncodeToken(user.email, user._id);
            res.status(200).json({message: "User logged in", token: Token});
        }else{
            res.status(401).json({error: "Log in failed"});
        }
    }catch(err){
        res.status(400).json({message:"Authentication failed"});
    }
}
export const getAllUsers = async (req, res) => {
    try{
        const users = await UsersModel.find();
        if (users){
            res.status(200).json({users: users});
        }else{
            res.status(401).json({error: " No users found"});
        }
    }catch(err){
        res.status(400).json({message:"Users not found"});
    }
}
export const UpdateUser = async (req, res) => {
    try{
        let email = req.headers['email']
        let updatedInput = req.body;
        let UpdatedUser = await UsersModel.updateOne({email: email}, updatedInput)
        if (UpdatedUser){
            res.status(201).json({message:"User Updated successfully"});
        }else {
            res.status(404).json({message:"User Not Updated"});
        }
    }catch(err){
        res.status(400).json({message:"Update user failed"});
    }
}
export const DeleteUser = async (req, res) => {
    try{
        let id = req.params.id;
        await UsersModel.deleteOne({_id: id})
        res.status(200).json({message:"User Deleted"});
    }catch(err){
        res.status(400).json({message:"User Deleted successfully"});
    }
}