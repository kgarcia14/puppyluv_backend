const db = require('./conn'),
    slugify = require('slugify');

class UsersModel {
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

    static async getAll() {
        try {
            const query = `SELECT * FROM user_profile;`;
            const response = await db.any(query);
            return response;
        } catch (error) {
            return error.message
        }
    }

    static async getByUserNickname(user_nickname) {
        console.log("user_nickname is:", user_nickname)
        try {
            console.log(user_nickname)
            const query = `SELECT * FROM user_profile WHERE user_nickname = '${user_nickname}';`;
            const response = await db.one(query);
            return response;
        } catch (error) {
            return error.message;
        }
    }

    static async addEntry(first_name, last_name, age, gender, city, zipcode, about_us, user_img, user_nickname, pet_name, pet_breed, pet_age, pet_personality, pet_img) {
        try {
            const response = await db.result(`INSERT INTO user_profile (first_name, last_name, age, gender, city, zipcode, about_us, user_img, user_nickname, pet_name, pet_breed, pet_age, pet_personality, pet_img) 
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14);`, [first_name, last_name, age, gender, city, zipcode, about_us, user_img, user_nickname, pet_name, pet_breed, pet_age, pet_personality, pet_img]);
            return response;
        } catch (error) {
            console.log("error", error.message)
            return error.message;
        }
    }
}

module.exports = UsersModel;