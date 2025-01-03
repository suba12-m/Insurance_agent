import express, { json } from 'express';
import cors from 'cors';
import dotenv from 'dotenv'; // Import dotenv package
import { MongoClient } from 'mongodb';

dotenv.config(); // Load environment variables from .env file

const app = express();

app.use(cors()); // Apply CORS middleware
app.use(json()); // Parse JSON requests

const url = process.env.MONGO_URI; // Use environment variable
const client = new MongoClient(url);

const dbName = "users"; // Replace with your actual database name

// Register Route
app.post("/register", async (req, res) => {
    try {
      await client.connect();
      const db = client.db(dbName);
      const { email, password } = req.body;
  
      if (!email || !password) {
        return res.status(400).json({ msg: "Email and password are required." });
      }
  
      const existingUser = await db.collection("agents").findOne({ email });
      if (existingUser) {
        return res.status(400).json({ msg: "Email is already registered." });
      }
  
      const result = await db.collection("agents").insertOne({ email, password });
  
      if (result.insertedId) {
        res.status(201).json({ msg: "Registration successful!" });
      } else {
        res.status(500).json({ msg: "Failed to register. Please try again later." });
      }
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ msg: "Internal server error." });
    } finally {
      await client.close();
    }
});

// Login Route
app.post("/login", async (req, res) => {
    try {
      await client.connect();
      const db = client.db(dbName);
      const { email, password } = req.body;
  
      if (!email || !password) {
        return res.status(400).json({ msg: "Email and password are required." });
      }
  
      const user = await db.collection("agents").findOne({ email, password });
  
      if (!user) {
        return res.status(400).json({ msg: "Invalid email or password." });
      }
  
      res.status(200).json({ msg: "Login successful!" });
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ msg: "Internal server error." });
    } finally {
      await client.close();
    }
});

app.post("/api/submit-bike-form", async (req, res) => {
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
