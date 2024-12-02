import jwt from 'jsonwebtoken';
import {JWT_Expires_In, JWT_Secret} from "../config/config.js";


export const EncodeToken = (email, user_id)=>{
    const KEY = JWT_Secret
    const ExpiresIn = {expiresIn: JWT_Expires_In}
    const PAYLOAD = {email:email, user_id:user_id}

    return jwt.sign(PAYLOAD, KEY, ExpiresIn)
}

export const decodeToken = (token)=>{
    try{
        const Secret = JWT_Secret
        return jwt.verify(token, Secret)
    }catch{
        return null
    }
}