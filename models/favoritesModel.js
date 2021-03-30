const db = require('./conn')

class FavoritesModel {
    constructor(id, liked_users) {
        this.id = id;
        this.liked_users = liked_users;
    }
    static async getAll() {
        try {
            const query = `SELECT * FROM favorites;`;
            const response = await db.any(query);
            return response;
        } catch (error) {
            return error.message
        }
    }

    static async getByFavorites(liked_users) {
        try {
            const query = `SELECT * FROM favorites WHERE liked_users = '${liked_users}`;
            const response = await db.one(query);
            return response;

        } catch (error) {
            return error.message
        }
    }

    static async addEntry(liked_users) {
        try {
            const response = await db.result(`INSERT INTO favorites (liked_users) VALUES ($1);`, [liked_users]);
            return response;
        } catch (error) {
            console.log('error', error.message)
            return error.message
        }
    }


}
module.exports = FavoritesModel