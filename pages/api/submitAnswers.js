// pages/api/submitAnswers.js
import { MongoClient } from 'mongodb';

const uri = "mongodb+srv://bunny:bunny1@cluster0.zmxclzz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

let client;

async function connectToDatabase() {
    if (!client) {
        client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        await client.connect();
    }
    return client.db('bunny');
}

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { userName, answers } = req.body;

        const db = await connectToDatabase();
        const collection = db.collection('userAnswers');

        await collection.insertOne({ userName, answers, timestamp: new Date() });

        res.status(200).json({ message: 'Answers submitted successfully' });
    } else {
        res.status(405).json({ message: 'Only POST method is allowed' });
    }
}
