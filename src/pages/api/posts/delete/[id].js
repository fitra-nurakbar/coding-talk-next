import db from "../../../../../lib/db";
import Autorization from "../../../../../middleware/authorization";

export default async function Handler(req, res) {
  if (req.method !== "DELETE") return res.status(405).end();

  const auth = await Autorization(req, res)

  const { id } = req.query;

  const deleteData = await db("posts").where({ id }).del();

  res.status(200);
  res.json({
    message: "Post deleted successfully",
  });
}
