const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const TokenService = require("./Token");
const {NotFound,Forbidden,Conflict} = require("../utils/Errors");
const RefreshSessionsRepository = require("../repositories/RefreshSession");
const UserRepository = require("../constants.js");
const {ACCES_TOKEN_EXPIRATION} = require("../constants.js");

class AuthService{
    static async signIn({ userName, password, fingerprint }) {}

    static async signUp({ userName, password, fingerprint, role }) {
        const userData = await UserRepository.getUserData(userName);
        if(userData){
            throw new Conflict("User already exists")
        }
        const hashedPassword = bcrypt.hashSync(password,8);

        const {id}=await UserRepository.createUser({
            userName,hashedPassword,role
        });
        const payload = {id,userName,role};
    }
  
    static async logOut(refreshToken) {}
  
    static async refresh({ fingerprint, currentRefreshToken }) {}
}

module.exports= AuthService;