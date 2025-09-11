import express from "express"
import { listUser, store_data } from "../controllers/Usercontrollers.js";
const app = express();

/* routs server  */
app.get("/user", listUser);
app.post("/user/store",store_data)


export default app
