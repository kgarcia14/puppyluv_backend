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

    static async addEntry(first_name, last_name, age, gender, city, zipcode, user_img, user_nickname, numb_pets) {
        try {
            const response = await db.result(`INSERT INTO user_profile (first_name, last_name, age, gender, city, zipcode, user_img, user_nickname, numb_pets) 
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9);`, [first_name, last_name, age, gender, city, zipcode, user_img, user_nickname, numb_pets]);
            return response;
        } catch (error) {
            console.log("error", error.message)
            return error.message;
        }
    }

    static async updatePet1(user_nickname, pet_name1, pet_breed1, pet_age1, pet_personality1, pet_img1) {
        try {
            const response = await db.one(`
            UPDATE user_profile
            SET pet_name1 = '${pet_name1}', pet_breed1 = '${pet_breed1}', pet_age1 = ${pet_age1}, pet_personality1 = '${pet_personality1}', pet_img1 = '${pet_img1}'
            WHERE user_nickname = '${user_nickname}';`);
            return response;
        } catch(error) {
            console.log("error", error.message)
            return error.message;
        }
    }
    static async updatePet2(user_nickname, pet_name2, pet_breed2, pet_age2, pet_personality2, pet_img2) {
        try {
            const response = await db.one(`
            UPDATE user_profile
            SET pet_name2 = '${pet_name2}', pet_breed2 = '${pet_breed2}', pet_age2 = ${pet_age2}, pet_personality2 = '${pet_personality2}', pet_img2 = '${pet_img2}'
            WHERE user_nickname = '${user_nickname}';`);
            return response;
        } catch(error) {
            console.log("error", error.message)
            return error.message;
        }
    }
    static async updatePet3(user_nickname, pet_name3, pet_breed3, pet_age3, pet_personality3, pet_img3) {
        try {
            const response = await db.one(`
            UPDATE user_profile
            SET pet_name3 = '${pet_name3}', pet_breed3 = '${pet_breed3}', pet_age3 = ${pet_age3}, pet_personality3 = '${pet_personality3}', pet_img3 = '${pet_img3}'
            WHERE user_nickname = '${user_nickname}';`);
            return response;
        } catch(error) {
            console.log("error", error.message)
            return error.message;
        }
    }
    static async updateAboutUs(user_nickname, about_us) {
        try {
            const response = await db.one(`
            UPDATE user_profile
            SET about_us = '${about_us}'
            WHERE user_nickname = '${user_nickname}';`);
            return response;
        } catch(error) {
            console.log("error", error.message)
            return error.message;
        }
    }

}

module.exports = UsersModel;