import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://seraphimrockcool94:ui07Zud6KKDL06xR@cluster0.5ubwx.mongodb.net/meetups?retryWrites=true&w=majority&appName=ABC"
    );
    const db = client.db();
    const meetupsCollection = db.collection("meetups");

    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: "插入成功" });
  }
}

export default handler;
