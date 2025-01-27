import jwt from "jsonwebtoken";
import User from "../models/user.models.js";

const protectRoute = async(req, res, next) => {
try{
const token = req.cookies.jwt;

if(!token){
    return res.status(401).json({error: "You need to be logged in to access this route"});

}

const decoded = jwt.verify(token, "5UFddrYbqz3/mLy75TixwMj3fU1ShkATXRa6Ya0ZT0k=");

if(!decoded){
    return res.status(401).json({error: "Invalid token, Unauthorised access"});

}
const user = await User.findById(decoded.userId).select("-password");
if(!user){
    return res.status(404).json({error: "User not found"})

} 
req.user = user;

next();

}catch (error) {
    console.log("Error in protectRoute middleware", error.message);
    res.status(500).json({ error: "Internal Server Error" });
}}

export { protectRoute };