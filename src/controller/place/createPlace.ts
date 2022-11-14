import { Request, Response } from "express"
import { Place } from "../../database/entities/place"
import { Employee } from '../../database/entities/employee';

export const createPlace =async (req:Request, res: Response) => {
    
//depois é preciso definir como recuperar o id do funcionário, (criação de sessão propria)
    const {id_employee, place_id, latitud, longitud} = req.body
    const currentEmployee = await Employee.findOne({where:{id:parseInt(id_employee)}})
    if(!currentEmployee) throw new Error("Funcionário não existe.");
    
    // console.log(currentEmployee);
    
//o Id do place tbm precisa ser definido de onde ele virá
    const place = new Place()
    place.emmployess = [currentEmployee]
    place.place_id = place_id
    place.latitud = latitud
    place.longitud = longitud

    
    await place.save()
    // console.log(place);

    return res.status(200).json(place)

}