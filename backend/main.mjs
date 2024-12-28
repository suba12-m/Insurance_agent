import express, { json } from 'express';
import { MongoClient } from 'mongodb';
import bodyParser from 'body-parser';
const app = express();
import cors from 'cors';
app.use(json());
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));

const url ="mongodb+srv://kpoornima2003:mongo@cluster0.nffn8.mongodb.net/";
const client = new MongoClient(url);

app.post("/register", async (req, res) => {
    await client.connect(); 
    const { email, password } = req.body; 
    console.log(email, password);
    const db = client.db("users"); 
    const list = await db.collection("agents").insertOne({ email, password }); 

    if (list.insertedId) {
        res.json({ msg: "Registered" });
    } else {
        res.status(400).json({ msg: "Error" });
    }
});

app.post("/login", async (req, res) => {
    await client.connect(); 
    const { email, password } = req.body; 
    console.log(email, password);
    const db = client.db("users"); 
    const user = await db.collection("agents").findOne({ email, password }); 

    if (user) { 
        res.json({ msg: "Login successfully" });
    } else {
        res.status(400).json({ msg: "Invalid email or password" });
    }
});


app.post("/api/submit-form", async (req, res) => {
    try {
        const { fullName, bikeModel, registrationNumber, contactNumber, email } = req.body;

        if (!fullName || !bikeModel || !registrationNumber || !contactNumber || !email) {
            return res.status(400).json({ error: 'All fields are required' });
        }
        const db = client.db("insuranceForms"); 
        const result = await db.collection("bike").insertOne({
            fullName,
            bikeModel,
            registrationNumber,
            contactNumber,
            email,
        });
        res.status(201).json({ id: result.insertedId, message: "Form submitted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
});

app.post("/api/submit-car-form", async (req, res) => {
    try {
        const { fullName, carModel, insuranceType, registrationNumber, contactNumber, email } = req.body;

        // Validate input
        if (!fullName || !carModel || !insuranceType || !registrationNumber || !contactNumber || !email) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        const db = client.db("insuranceForms"); // Replace with your database name
        const result = await db.collection("car").insertOne({
            fullName,
            carModel,
            insuranceType,
            registrationNumber,
            contactNumber,
            email,
        });

        res.status(201).json({ id: result.insertedId, message: "Form submitted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
});


app.post("/api/submit-fire-form", async (req, res) => {
    try {
        const { fullName, propertyType, fireRiskLevel, propertyAddress, contactNumber, email } = req.body;

        // Validate input
        if (!fullName || !propertyType || !fireRiskLevel || !propertyAddress || !contactNumber || !email) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        const db = client.db("insuranceForms"); // Replace with your database name
        const result = await db.collection("fire").insertOne({
            fullName,
            propertyType,
            fireRiskLevel,
            propertyAddress,
            contactNumber,
            email,
        });

        res.status(201).json({ id: result.insertedId, message: "Form submitted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
});


app.post("/api/submit-home-form", async (req, res) => {
    try {
        const { fullName, propertyType, propertyAddress, propertyValue, contactNumber, email } = req.body;

        // Validate input
        if (!fullName || !propertyType || !propertyAddress || !propertyValue || !contactNumber || !email) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        const db = client.db("insuranceForms"); // Replace with your database name
        const result = await db.collection("home").insertOne({
            fullName,
            propertyType,
            propertyAddress,
            propertyValue,
            contactNumber,
            email,
        });

        res.status(201).json({ id: result.insertedId, message: "Form submitted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
});

app.post("/api/submit-life-form", async (req, res) => {
    try {
        const { fullName, age, gender, contactNumber, email, coverageAmount } = req.body;

        // Validate input
        if (!fullName || !age || !gender || !contactNumber || !email || !coverageAmount) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        const db = client.db("insuranceForms"); // Replace with your database name
        const result = await db.collection("life").insertOne({
            fullName,
            age,
            gender,
            contactNumber,
            email,
            coverageAmount,
        });

        res.status(201).json({ id: result.insertedId, message: "Form submitted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
});

app.post("/api/submit-travel-form", async (req, res) => {
    try {
        const { fullName, age, destination, travelStartDate, travelEndDate, contactNumber, email } = req.body;

        // Validate input
        if (!fullName || !age || !destination || !travelStartDate || !travelEndDate || !contactNumber || !email) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        const db = client.db("insuranceForms"); // Replace with your database name
        const result = await db.collection("travel").insertOne({
            fullName,
            age,
            destination,
            travelStartDate,
            travelEndDate,
            contactNumber,
            email,
        });

        res.status(201).json({ id: result.insertedId, message: "Form submitted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
});

app.get("/api/customers", async (req, res) => {
    try {
        const db = client.db("insuranceForms");
        const bikeData = await db.collection("bike").find({}, { projection: { fullName: 1 } }).toArray();
        const carData = await db.collection("car").find({}, { projection: { fullName: 1 } }).toArray();
        const lifeData = await db.collection("life").find({}, { projection: { fullName: 1 } }).toArray();
        const travelData = await db.collection("travel").find({}, { projection: { fullName: 1 } }).toArray();
        const homeData = await db.collection("home").find({}, { projection: { fullName: 1 } }).toArray();
        const fireData = await db.collection("fire").find({}, { projection: { fullName: 1 } }).toArray();


        // Combine all data into a single array
        const allCustomers = [
            ...bikeData.map(item => ({ ...item, category: 'Bike' })),
            ...carData.map(item => ({ ...item,category: 'Car' })),
            ...lifeData.map(item => ({ ...item, category: 'Life' })),
            ...travelData.map(item => ({ ...item, category: 'Travel' })),
            ...homeData.map(item => ({ ...item, category: 'Home' })),
            ...fireData.map(item => ({ ...item,category: 'Fire' })),
        ];

        res.status(200).json(allCustomers);
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
});

app.listen(3000, () => {
    console.log("Server started on port 3000");
});