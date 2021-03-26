const db = require('./conn');
const express = require('express');
const { response } = require('express');

class puppyModel {
    constructor(id, pet_name, pet_breed, pet_age, gender, pet_personality, pet_image) {
        this.id = id;
        this.pet_name = pet_name;
        this.pet_breed = pet_breed;
        this.pet_age = pet_age;
        this.gender = gender;
        this.pet_personality = pet_personality;
        this.pet_image = pet_image
    }

    static async getAll() {
        const response = await db.any(`SELECT * FROM user_profile;`);
        return response;
    }
    static async addEntry(pet_name, pet_breed, pet_age, gender, pet_personality) {
        const response = await db.result(`INSERT INTO user_profile (pet_name, pet_breed, pet_age, gender, pet_personality, pet_image) VALUES ($1, $2, $3, $4, $5, $6)`, [pet_name, pet_breed, pet_age, gender, pet_personality, pet_image])
        return response;
    }

}

module.exports = puppyModel;