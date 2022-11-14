import { Router } from "express";
import { createPlace } from '../../controller/place/createPlace';

const routesPlace = Router()

routesPlace.post('/auth/signin/salveplace', createPlace)

export default routesPlace