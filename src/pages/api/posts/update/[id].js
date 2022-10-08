import db from "../../../../../lib/db";

export default async function Handler(req, res) {
  if (req.method !== "PUT") return res.status(405).end();

  const { id } = req.query;
  const { title, category, content } = req.body;

  const updateData = await db("posts")
    .where({ id })
    .update({ title, category, content });
  const updatePost = await db("posts").where({ id }).first();

  res.status(200);
  res.json({
    message: "Post updated successfully",
    data: updatePost,
  });
}
