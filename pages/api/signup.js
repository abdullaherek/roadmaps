import { connectToDatabase } from "../../util/mongodb";

export default async function handler(req, res) {
  const { db } = await connectToDatabase();

  const data = JSON.parse(req.body);
  const response = await db.collection("user").insertOne({ data });
  res.json(response);
}
