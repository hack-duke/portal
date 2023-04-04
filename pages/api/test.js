import connectDB from "/utils/mongodb.js";
export default async function test(req, res) {
    const { db } = await connectDB();
    const result = await db.collection("users").find({}).toArray();
    res.json(result);
}
