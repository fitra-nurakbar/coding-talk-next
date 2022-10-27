import db from "../../../../../lib/db";
import Autorization from "../../../../../middleware/authorization";

export default async function Handler(req, res) {
  if (req.method !== "PUT") return res.status(405).end();
  
  console.log(req.body)
  const auth = await Autorization(req, res)

  const { id } = req.query;
  const { title, kategori_id, content } = req.body;


  const updateData = await db("posts")
    .where({ id })
    .update({ title, kategori_id, content });
  const updatePost = await db("posts").where({ id }).first();

  res.status(200);
  res.json({
    message: "Post updated successfully",
    data: updatePost,
  });
}
