import express  from "express";
import config from "./config/conectores.js";
import user from "./routes/router.user.js"

const app = express();
const port = config.port;

//middlewares
app.use(express.json());


//rutas
app.use("/api/v1" , user);


// Levantar servidor
app.listen(port, () => {
  console.log("Servidor corriendo en puerto", port);
});
