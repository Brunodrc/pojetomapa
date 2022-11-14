import express from 'express'
import cors from 'cors'
import routesEmployee from './routes/employee/routesEmployee'
import routesPlace from './routes/place/routesPlace';

const myapp = express()
myapp.use(cors())
myapp.use(express.json())

myapp.use(routesEmployee)
myapp.use(routesPlace)


export default myapp