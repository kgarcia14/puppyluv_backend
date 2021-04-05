const db = require('./conn')

class PConnectionsModel {
    constructor(id, first_name, last_name, age, gender, city, zipcode, about_us, user_img, user_nickname, pet_name, pet_breed, pet_age, pet_personality, pet_img) {
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.age = age;
        this.gender = gender;
        this.city = city;
        this.zipcode = zipcode;
        this.about_us = about_us;
        this.user_img = user_img;
        this.user_nickname = user_nickname;
        this.pet_name = pet_name;
        this.pet_breed = pet_breed;
        this.pet_age = pet_age;
        this.pet_personality = pet_personality;
        this.pet_img = pet_img;
    }

    static async getByUserNickname(user_nickname) {
        const str = user_nickname;
        const newStr = str.replace(/%7c/g, "|")
        console.log("user_nickname is:", newStr)
        try {
            const query = `SELECT * FROM user_profile WHERE user_nickname != '${newStr}';`;
            const response = await db.any(query);
            return response;
        } catch (error) {
            return error.message;
        }
    }
}

module.exports = PConnectionsModel;