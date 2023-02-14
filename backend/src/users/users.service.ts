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

    async createUser(user: CreateUserDto) {

        const userFound = await this.userRepository.finOne({
            where: { username: user.username }
        })

        if (userFound) {
            return new HttpException('User already exist', HttpStatus.CONFLICT)
        }


        const newUser = this.userRepository.create(user)
        return this.userRepository.save(newUser)
    }

    getUsers() {
        return this.userRepository.find()
    }

    getUser(id: number) {
        const userFound = await this.userRepository.finOne({
            where: { id }
        })
        if (!userFound) {
            return new HttpException('User not found', HttpException.NOT_FOUND)
        }
        return userFound;
    }

    async deleteUser(id: number) {
        return this.userRepository.delete({
            id: id
        })

    }

    updateUser(id: number, user: UpdateUserDto) {
        return this.userRepository.update({ id: id }, user)

    }

}
