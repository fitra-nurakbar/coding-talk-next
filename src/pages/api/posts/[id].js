import db from "../../../../lib/db";
import Autorization from "../../../../middleware/authorization";

export default async function Handler(req, res) {
  if (req.method !== "GET") return res.status(405).end();

  const auth = await Autorization(req, res);

  const { id } = req.query;
  const postId = await db("posts").where({ id }).first();

  const test = `test ${id}`;
  res.status(200);
  res.json({
    message: "Post data id",
    data: postId,
  });
}
