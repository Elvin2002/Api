import express from "express"
import { listUser } from "../controllers/user.controllers.js";
const app = express();




/* routs server  */
app.get("/user", listUser)

export default app
