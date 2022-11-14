import { Request, Response } from "express";
import {hash} from 'bcryptjs'
import { Employee } from "../../database/entities/employee";


export const signup = async (req: Request, res: Response) => {

    try {
        
        const { name, email, e_social, password, field, occupation } = req.body

    //é preciso definir constrains, por exemplo email único?
    const existEmployee = await Employee.findOneBy({email})
    if(existEmployee) throw new Error("Usuário existente.");
    

    const hashPassword = await hash(password,10)

    const employee = new Employee()
    employee.name = name
    employee.email = email
    employee.e_social = e_social
    employee.password = hashPassword
    employee.field = field
    employee.occupation = occupation
    
    await employee.save()

    return res.status(200).json(employee)

    } catch (error) {
        if(error instanceof Error)
        res.status(401).json({msg: error.message})
    }


}