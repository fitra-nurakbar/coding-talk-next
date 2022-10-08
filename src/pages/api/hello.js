// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Autorization from "../../../middleware/authorization";

export default async function handler(req, res) {
  const auth = await Autorization(req, res)
  console.log(auth)
  res
    .status(200)
    .json(["John Doe", "Dodit", "Agus", "John Doe", "Dodit", "Agus"]);
}
