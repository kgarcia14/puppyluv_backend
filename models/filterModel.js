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
            const query = `SELECT * FROM user_profile WHERE age > 17 AND age < 21;`;
            const response = await db.any(query);
            return response;
        } catch (error) {
            return error.message;
        }
    }
    static async getFilteredAge2025(age) {
        console.log("in Model: ", age)
        try {
            const query = `SELECT * FROM user_profile WHERE age > 19 AND age < 26;`;
            const response = await db.any(query);
            return response;
        } catch (error) {
            return error.message;
        }
    }
    static async getFilteredAge2530(age) {
        console.log("in Model: ", age)
        try {
            const query = `SELECT * FROM user_profile WHERE age > 24 AND age < 31;`;
            const response = await db.any(query);
            return response;
        } catch (error) {
            return error.message;
        }
    }
    static async getFilteredAge3035(age) {
        console.log("in Model: ", age)
        try {
            const query = `SELECT * FROM user_profile WHERE age > 29 AND age < 36;`;
            const response = await db.any(query);
            return response;
        } catch (error) {
            return error.message;
        }
    }
    static async getFilteredAge3540(age) {
        console.log("in Model: ", age)
        try {
            const query = `SELECT * FROM user_profile WHERE age > 34 AND age < 41;`;
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