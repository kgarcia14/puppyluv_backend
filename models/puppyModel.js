const db = require('./conn');
const express = require('express')

class puppyModel {
    constructor(id, pet_name, pet_breed) {
        this.id = id;
        this.pet_name = pet_name;
        this.pet_breed = pet_breed;
    }

    static async getAll() {
        const response = await db.any(`SELECT * FROM pet_profile;`);
    }

}