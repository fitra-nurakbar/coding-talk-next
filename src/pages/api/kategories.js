import db from "../../../lib/db"
import Autorization from "../../../middleware/authorization"

export default async function Handler(req, res) {
     if(req.method !== "GET" ) return res.status(450).end()

     const auth = await Autorization(req, res)

     const kategories = await db("kategories")

     res.status(200)
     res.json({
          message: "All kategories",
          data: kategories,
     })
}
