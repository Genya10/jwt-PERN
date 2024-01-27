const { ErrorUtils, Unprocessable } = require("../utils/Errors");
const AuthService = require("../services/AuthService");
const {COOKIE_SETTINGS} = require("../constants.js");

class AuthController {
   static async signIn(req,res){
    const {fingerprint} = req; 
    try{
        return res.sendStatus(200);
    }catch(err){
        return ErrorUtils.catchError(res,err);
    }
   }

   /*static async signUp(req,res){
     const {fingerprint} = req;
     try {
        return res.sendStatus(200);
     }catch(err){
        return ErrorUtils.catchError(res,err);
     }
   }*/
   static async signUp(req, res) {
    const { fingerprint } = req;
    try {
        console.log("Received sign-up request:", req.body); // Добавьте этот вывод
        if (!req.body.role) {
            throw new Unprocessable(JSON.stringify({
                path: "role",
                errors: ["Field is necessarily"],
            }));
        }
        // продолжайте обработку регистрации
        return res.sendStatus(200);
    } catch (err) {
        console.error("Error during sign-up:", err);
        return ErrorUtils.catchError(res, err);
    }
}

   static async logOut(req,res){
    const {fingerprint} = req;
    try{
        return res.sendStatus(200);
    }catch(err){
        return ErrorUtils.catchError(res,err);
    }
   }

   static async refresh(req,res){
    const {fingerprint} = req;
    try{
        return res.sendStatus(200);
    }catch(err){
        return ErrorUtils.catchError(res,err);
    }
   }

}

module.exports = AuthController;