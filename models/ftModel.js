const db = require('./conn')

class FTModel {
    constructor(id, other_nickname, user_id ) {
        this.id = id;
        this.other_nickname = other_nickname;
        this.user_id = user_id
    }

    static async getByUserId(user_id) {
        const str = user_id;
        const newStr = str.replace(/%7c/g, "|")
        console.log("user_id is:", newStr)
        try {
            const query = `
            SELECT * 
            FROM favorites_test 
                JOIN user_profile
                ON favorites_test.other_nicknames = user_profile.user_nickname
            WHERE user_id = '${newStr}';`;
            const response = await db.any(query);
            return response;
        } catch (error) {
            return error.message;
        }
    }

    static async addEntry(other_nicknames, user_id) {
        try{
            const response = await db.result(`INSERT INTO favorites_test (other_nicknames, user_id) VALUES($1, $2);`, [other_nicknames, user_id]);
            return response;
        } catch (error) {
            console.log("error", error.message)
            return error.message;
        }
    }
}

module.exports = FTModel;