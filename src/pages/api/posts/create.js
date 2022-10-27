import db from "../../../../lib/db";
import Autorization from "../../../../middleware/authorization";

export default async function Handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();
  
  const auth = await Autorization(req, res)

  const { title, kategori_id, content } = req.body;
  const create = await db("posts").insert({
    title,
    kategori_id,
    content,
  });

  const createPost = await db("posts").where("id", create).first();

  res.status(200),
    res.json({
      message: "Post created successfully",
      data: createPost,
    });
}
