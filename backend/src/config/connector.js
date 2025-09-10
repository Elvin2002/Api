import mysql from "mysql2/promise"

async function CreatePool(Users = "" ,Password = "" ,Database = "", Host = "", Port=3306 ){
    try{

        const connection = await mysql.createPool({host:Host, user:Users, 
            password:Password,
            database:Database,
            port:Port,
            queueLimit:0,
            connectionLimit:15,
            waitForConnections:true                                            
        });
        return connection
    }catch(error){
        return error;
    }
}

export default CreatePool