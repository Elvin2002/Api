import dotenv from "dotenv";
dotenv.config();

const config = {
    port : process.env.port,
    host : process.env.host,
    database:process.env.database,
    user:process.env.user,
    password:process.env.password,
    portdb:process.env.portdb
}

export default config