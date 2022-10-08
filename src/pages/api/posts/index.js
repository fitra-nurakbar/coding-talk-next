import db from "../../../../lib/db";
import Autorization from "../../../../middleware/authorization";

export default async function Handler(req, res) {
  if (req.method !== "GET") return res.status(405).end();

  const auth = await Autorization(req, res);

  const posts = await db("posts");

  res.status(200);
  res.json({
    message: "All posts data",
    data: posts,
  });
}
