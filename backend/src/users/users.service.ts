//httpStatus es un "enum": es decir que ya tiene unas cuantas 
//opciones a escojer 
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
//puede ser pensado como una biblioteca que se comunica
//con la dbs para hacer consultas
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'

//Lo primero que tengo que hacer es traer la entidad
@Injectable()
export class UsersService {
    //creo el constructor -Injecto un repositorio
    //le doy un nombre (userRepository) 
    //y le digo que tipo de dato es (Respository) el cual importo
    //desde 'typeorm'
    //private: para que se instancie automaticamente
    constructor(@InjectRepository(User) private userRepository: Respository<User>) { }


    //-----------------------------------------------------
    async createUser(user: CreateUserDto) {

        const userFound = await this.userRepository.finOne({
            where: { username: user.username }
        })

        if (userFound) {
            //HttpExceptio('mensaje',numero o enum)
            return new HttpException('User already exists', HttpStatus.CONFLICT)
        }


        const newUser = this.userRepository.create(user)
        return this.userRepository.save(newUser)
    }



    //-----------------------------------------------------
    getUsers() {
        return this.userRepository.find()
    }


    //-----------------------------------------------------
    async getUser(id: number) {
        const userFound = await this.userRepository.finOne({
            where: { id }
        })
        if (!userFound) {
            return new HttpException('User not found', HttpException.NOT_FOUND)
        }
        return userFound;
    }




    //-----------------------------------------------------
    async deleteUser(id: number) {
        const userFound = await this.userRepository.findOne({
            where: { id }
        })

        if (!userFound) {
            return new HttpException('User not found', HttpException.NOT_FOUND)
        }

        return this.userRepository.delete({
            id: id
        })

    }


    //-----------------------------------------------------
    async updateUser(id: number, user: UpdateUserDto) {
        const userFound = await this.userRepository.findOne({ where: { id } })

        if (!userFound) {
            return new HttpException('User nor found', HttpStatus.NOT_FOUND)
        }
        //Esto es lo mismo/son dos opciones:
        //return this.userRepository.update({ id: id }, user)
        const userUpdated = Object.assign(userFound, user);
        return this.userRepository.save(userUpdated)

    }

}





//-----------------------------------------------------
//Otra forma de escribir el delelete teniendo en cuenta que el resuoltado que 
//devuelve el detele va a ser "affected= 0" si se encuentra un resultado a 
//elimina

// async deleteUser(id:number){
//    const result = await this.userRepository.delete({id})
//    if (result.affected === 0){
//        return new HttpException('User not found', HttpStatus.NOT_FOUND);
//    }
//    return result
//}

