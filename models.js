//Remember to import in mongoose
const mongoose = require('mongoose');


//create the citizen schema here with the appropriate data types
const citizenSchema = new mongoose.Schema({
    name: String,
    dateOfBirth: Date,
    fatherName: String,
    motherName: String,
    gender: String,
    bloodGroup: String,
});


//create the title schema here with the right fields
const titleSchema = new mongoose.Schema({
    ownerName: String,
    location: String,
    size: String,
    coordinates: String,
    titleNumber: {
        type: String,
        unique: true
    },
    satellitePhoto: String,
});



// Convert the schemas into models
const Citizen = mongoose.model('Citizen', citizenSchema);
const Title = mongoose.model('Title', titleSchema);

// Export the models as modules
module.exports = {
    Citizen,
    Title
};