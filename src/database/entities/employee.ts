import { BaseEntity, Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Place } from "./place";


@Entity()
export class Employee extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number

    @Column({
        length:150
    })
    name: string

    @Column()
    email: string
    
    @Column()
    e_social: string
    
    @Column()
    password: string
    
    @Column()
    field: string
    
    @Column()
    occupation: string

    @ManyToMany(
        () => Place, (place) => place.emmployess,{
            nullable:true
        }
    )
    places: Place[]

}