const mongoose = require('mongoose');

// Schemas are the structure of our data, and the data types

const vegetableSchema = new mongoose.Schema({
    name: String,
    color: String,
    age: Number,
    readyToEat: Boolean
})

const MyVegetable = mongoose.model('MyVegatable', vegetableSchema)


module.exports = MyVegetable;