const db = require('./conn')

class FilterModel {
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

    static async getFilteredAge1820(age) {
        console.log("in Model: ", age)
        try {
            const query = `SELECT * FROM user_profile WHERE age > 18 AND age < 20;`;
            const response = await db.any(query);
            return response;
        } catch (error) {
            return error.message;
        }
    }
    static async getFilteredAge2025(age) {
        console.log("in Model: ", age)
        try {
            const query = `SELECT * FROM user_profile WHERE age > 20 AND age < 25;`;
            const response = await db.any(query);
            return response;
        } catch (error) {
            return error.message;
        }
    }
    static async getFilteredAge2530(age) {
        console.log("in Model: ", age)
        try {
            const query = `SELECT * FROM user_profile WHERE age > 25 AND age < 30;`;
            const response = await db.any(query);
            return response;
        } catch (error) {
            return error.message;
        }
    }
    static async getFilteredAge3035(age) {
        console.log("in Model: ", age)
        try {
            const query = `SELECT * FROM user_profile WHERE age > 30 AND age < 35;`;
            const response = await db.any(query);
            return response;
        } catch (error) {
            return error.message;
        }
    }
    static async getFilteredAge3540(age) {
        console.log("in Model: ", age)
        try {
            const query = `SELECT * FROM user_profile WHERE age > 35 AND age < 40;`;
            const response = await db.any(query);
            return response;
        } catch (error) {
            return error.message;
        }
    }
    static async getFilteredGender(filter) {
        console.log("in Model: ", filter)
        try {
            const query = `SELECT * FROM user_profile WHERE gender = '${filter}';`;
            const response = await db.any(query);
            return response;
        } catch (error) {
            return error.message;
        }
    }
    static async getFilteredCity(filter) {
        console.log("in Model: ", filter)
        try {
            const query = `SELECT * FROM user_profile WHERE city = '${filter}';`;
            const response = await db.any(query);
            return response;
        } catch (error) {
            return error.message;
        }
    }
    static async getFilteredNumbPets(filter) {
        try {
            const query = `SELECT * FROM user_profile WHERE numb_pets = '${filter}';`;
            const response = await db.any(query);
            return response;
        } catch (error) {
            return error.message;
        }
    }
    static async getFilteredMoreNumbPets() {
        try {
            const query = `SELECT * FROM user_profile WHERE numb_pets > 3;`;
            const response = await db.any(query);
            return response;
        } catch (error) {
            return error.message;
        }
    }
    static async getFilteredPetPersonality(filter) {
        try {
            const query = `SELECT * FROM user_profile WHERE pet_personality1 = '${filter}' OR pet_personality2 = '${filter}' OR pet_personality3 = '${filter}';`;
            const response = await db.any(query);
            return response;
        } catch (error) {
            return error.message;
        }
    }
}

module.exports = FilterModel;