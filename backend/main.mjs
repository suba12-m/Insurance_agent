import express, { json } from 'express';
import cors from 'cors';
import { MongoClient } from 'mongodb';
const app = express();

app.use(cors()); // Apply CORS middleware
app.use(json()); // Parse JSON requests

const url = "mongodb+srv://kpoornima2003:mongo@cluster0.nffn8.mongodb.net/";
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

app.listen(3000, () => {
    console.log("Server started on port 3000");
});