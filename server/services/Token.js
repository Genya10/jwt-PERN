const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const {Forbidden,Unauthorized} = require("../utils/Errors")

dotenv.config();

class TokenService {
    static async generateAccessToken(payload){
        return await jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET,{
            expireshIn:"30m",
        });
    }

    static async generateRefreshToken(payload){
        return await jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET,{
            expireshIn:"15d",
        });
    }

    static async checkAccess(req ,_, next){
        const authHeader = req.headers.authorization;

        const token = authHeader?.split(" ")?.[1];

        if(!token){
            return next(new Unauthorized());
        }

        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET,(error,user)=>{
            console.log(error,user);
            if(error){
                return next(new Forbidden(error));
            }
            req.user = user;
            next();
        });
    }
}

module.exports = TokenService;