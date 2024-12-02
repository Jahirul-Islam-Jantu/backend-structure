import {decodeToken} from "../utilities/TokenUtilities.js";

export const UserAuthMiddleware = (req, res, next) => {
    let token = req.headers['token']
    if (!token){
        res.status(401).send('No token provided');
    }
    const DecodeToken = decodeToken(token)
    if (!DecodeToken) {
        return res.status(401).send({message:"Token not found"})
    }else{
        req.headers['email'] = DecodeToken.email;
        next()
    }
}