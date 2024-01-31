const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const TokenService = require("./Token");
const {NotFound,Forbidden,Conflict,Unauthorized} = require("../utils/Errors");
const RefreshSessionsRepository = require("../repositories/RefreshSession");
const UserRepository = require("../repositories/UserRepository");
const {ACCESS_TOKEN_EXPIRATION} = require("../constants.js");

class AuthService{
    static async signIn({ userName, password, fingerprint }) {
        const userData = await UserRepository.getUserData(userName);

        if(!userData){
            throw new NotFound("User not found")
        }
        const isPasswordValid = bcrypt.compareSync(password,userData.password);
        if(!isPasswordValid){
            throw new Forbidden("Wrong login or password");
        }
        const payload = {id:userData.id, role:userData.role,userName};
        const accessToken = await TokenService.generateAccessToken(payload);
        const refreshToken = await TokenService.generateRefreshToken(payload);
        await RefreshSessionsRepository.createRefreshSession({
            id,
            refreshToken,
            fingerprint
        });
        return {
            accessToken,
            refreshToken,
            accessTokenExpiration:ACCESS_TOKEN_EXPIRATION
        }
    }

    static async signUp({ userName, password, fingerprint, role }) {
        const userData = await UserRepository.getUserData(userName);
        if(userData){
            throw new Conflict("User already exists")
        }
        const hashedPassword = bcrypt.hashSync(password,8);

        const {id}=await UserRepository.createUser({
            userName, hashedPassword, role
        });
        const payload = {id,userName,role};

        const accessToken = await TokenService.generateAccessToken(payload);
        const refreshToken = await TokenService.generateRefreshToken(payload);

        await RefreshSessionsRepository.createRefreshSession({            
            id,
            refreshToken,
            fingerprint
        });
        return {
            accessToken,
            refreshToken,
            accessTokenExpiration:ACCESS_TOKEN_EXPIRATION
        }
    }
  
    static async logOut(refreshToken) {
        await RefreshSessionsRepository.deleteRefreshSession(refreshToken)
    }
  
    static async refresh({ fingerprint, currentRefreshToken }) {}
}

module.exports= AuthService;