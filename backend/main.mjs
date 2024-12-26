import express, { json } from 'express';
import { MongoClient } from 'mongodb';
const app = express();
import cors from 'cors';
app.use(json());
app.use(cors());



const url = 'mongodb+srv://suba:subasree@cluster0.7tx7l.mongodb.net/';
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

app.listen(3000, () => {
    console.log("Server started on port 3000");
});