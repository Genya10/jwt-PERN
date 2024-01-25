const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const TokenService = require("./Token");
const {NotFound,Forbidden,Conflict} = require("../utils/Errors");
const RefreshSessionsRepository = require("../repositories/RefreshSession");
const UserRepository = require("../constants.js");
const {ACCES_TOKEN_EXPIRATION} = require("../constants.js");

class AuthService{
    static async signIn({ userName, password, fingerprint }) {}

    static async signUp({ userName, password, fingerprint, role }) {}
  
    static async logOut(refreshToken) {}
  
    static async refresh({ fingerprint, currentRefreshToken }) {}
}

module.exports= AuthService;