import CreatePool from "../config/connector.js";
import config from "../config/conectores.js";

async function Listuser() {
    const pool = await  CreatePool(config.user, config.password, config.database, config.host, config.portdb);
    const [row] = await pool.query("select * from usuarios");
    //console.log( await pool.query("select * from usuarios"))
    return  row
}

export default Listuser