const { ErrorUtils } = require("../utils/Errors");
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

   static async signUp(req,res){
     const {fingerprint} = req;
     try {
        return res.sendStatus(200);
     }catch(err){
        return ErrorUtils.catchError(res,err);
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