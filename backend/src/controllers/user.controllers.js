import Listuser from "../models/user.models.js"

function listUser(req ,  res){
    const list = Listuser();
    res.status(200).json({data:list})
    
}

export {listUser}
