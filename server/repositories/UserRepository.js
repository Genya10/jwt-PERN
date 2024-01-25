const pool = require("../db.js");

class UserRepository {
    static async createUser({userName,hashedPassword,role}){}

    static async getUserData(userName){}
}

module.exports = UserRepository;