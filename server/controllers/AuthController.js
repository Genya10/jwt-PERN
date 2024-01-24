import { ErrorUtils } from "../utils/Errors";

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