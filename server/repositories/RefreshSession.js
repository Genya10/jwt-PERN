const pool = require("../db.js");

class RefreshSessionRepository {
    static async getRefreshSession(refreshToken){}

    static async createrefreshSession({id, refreshToken, fingerprint}){}

    static async deleteRefreshSession(refreshToken){}
}

module.exports = RefreshSessionRepository;