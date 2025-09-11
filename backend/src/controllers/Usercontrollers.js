import Listuser from "../models/user.models.js"

async function listUser(req, res) {
    const list = await Listuser();
    console.log(list)
    res.status(200).json({ data: list })

}

export const store_data = (req, res) => {
    try{
        const { dni, usuario, password, token, fecha_creacion, estado } = req.body;
       
    }catch(error){
        return "error in the controller" , error;
    }
}

export { listUser }
