import mysql from "mysql2/promise"

async function CreatePool(Users ,Password ,Database , Host , Port ){
    try{

        const pool = await mysql.createPool({host:Host, user:Users, 
            password:Password,
            database:Database,
            port:Port,
            queueLimit:0,
            connectionLimit:15,
            waitForConnections:true                                            
        });
        return pool
    }catch(error){
        return error;
    }
}

export default CreatePool