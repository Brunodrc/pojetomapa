import { DataSource } from "typeorm";
import { Employee } from "./entities/employee";
import { Place } from "./entities/place";


export const appDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '12345',
    database: 'pojetomapa',
    synchronize: false,
    logging: true,
    entities: [Employee, Place],
    migrations: ['src/database/migrations/*{.ts,.js}']
})