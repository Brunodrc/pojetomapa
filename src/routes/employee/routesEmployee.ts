import { Router } from "express";
import { signup } from "../../controller/employee/createEmployee";


const routesEmployee = Router()

routesEmployee.post('/signup', signup)


export default routesEmployee