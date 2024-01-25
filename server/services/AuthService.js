const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


class AuthService{
    static async signIn({ userName, password, fingerprint }) {}

    static async signUp({ userName, password, fingerprint, role }) {}
  
    static async logOut(refreshToken) {}
  
    static async refresh({ fingerprint, currentRefreshToken }) {}
}

module.exports= AuthService;