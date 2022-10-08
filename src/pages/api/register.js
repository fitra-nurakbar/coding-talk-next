import db from "../../../lib/db";
import bcrypt from "bcryptjs";

export default async function Handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { email, password } = req.body;
  const salt = bcrypt.genSaltSync(10);
  const passwordHash = bcrypt.hashSync(password, salt);

  const inputUser = await db("users").insert({
    email,
    password: passwordHash,
  });

  const registerUser = await db("users").where({ id: inputUser }).first();

  res.status(200);
  res.json({
    message: "user registered successfully",
    data: registerUser,
  });
}
