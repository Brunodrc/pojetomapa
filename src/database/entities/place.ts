import { BaseEntity, Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Employee } from './employee';


@Entity()
export class Place extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    place_id: string

    @Column()
    latitud: string

    @Column()
    longitud: string

    @ManyToMany(
        () => Employee, (employee) => employee.places, {
            nullable: true,
            cascade:true
        }
    )
    @JoinTable()
    emmployess: Employee[]
}