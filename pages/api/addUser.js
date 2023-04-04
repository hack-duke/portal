import connectDB from "@/utils/mongodb";

export default async function addUser(req, res) {
    const { db } = await connectDB();
    const data = req.body;
    const result = await db.collection("users").insertOne(data);
    res.json(result);
}
