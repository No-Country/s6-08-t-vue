import { Entity, Column, PrimaryGenerateColum } from 'typeorm'


//@Entity() class User... Lo que va a hacer es pluralizar el nombre
// de manera tal que si quiero cambiarlo puedo utilizar la sig sintax
//
//@Entity({name: 'Usuarios'})
//class User{
//
//


@Entity({ name: 'Users' })
export class User {

    //PrimaryGenerateColum Permite generar el ID por si solo
    @PrimaryGenerateColum()
    id: number

    //unique va a obligar a que solo exista un nombre igual
    @Column({ unique: true })
    username: string
    @Column()
    password: string
    //defaul ya viene con MySql y 'CURRENT_TIMESTAMP' refiere a colocar la fecha actual
    @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date
    //nullable funciona para indicar que no es requerido
    @Column({ nullable: true })
    authStrategy: string
}
