//this is where your express sever is created and managed
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//do not forget to import the necessary modules,
const tables = require('./models');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//do not forget to connect to your mongoDb
mongoose.connect('mongodb+srv://your-connection-string', { useNewUrlParser: true, useUnifiedTopology: true });

//do not forget to set up routes to serve out the html file
app.post('/citizen', async (req, res) => {
    try {
        const newCitizen = await Citizen.create(req.body);
        res.status(201).json(newCitizen);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post('/title', async (req, res) => {
    try {
        const newTitle = await Title.create(req.body);
        res.status(201).json(newTitle);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/citizens', async (req, res) => {
    try {
        const citizens = await Citizen.find();
        res.status(200).json(citizens);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/titles', async (req, res) => {
    try {
        const titles = await Title.find();
        res.status(200).json(titles);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Do not forget to handle your form posts for the relevant forms

// Do not forget to handle form gets for the necessary data to display on the user interface.


//Do not forget to catch all the erros that may arise during the process of parsing data from one form to another.

// do not forget to create a port for your application and serving out the appliacation via the port created 
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});