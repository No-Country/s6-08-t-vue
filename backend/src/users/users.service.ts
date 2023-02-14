import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
//puede ser pensado como una biblioteca que se comunica
//con la dbs para hacer consultas
import { CreateUserDto } from './dto/create-user.dto'


//Lo primero que tengo que hacer es traer la entidad
@Injectable()
export class UsersService {

    //creo el constructor -Injecto un repositorio
    //le doy un nombre (userRepository) 
    //y le digo que tipo de dato es (Respository) el cual importo
    //desde 'typeorm'
    //private: para que se instancie automaticamente
    constructor(@InjectRepository(User) private userRepository: Respository<User>){}

    createUser(user: CreateUserDto){
        const newUser = this.userRepository.create(user)
        return this.userRepository.save(newUser)
    }

    getUsers(){
     return   this.userRepository.find()
    }


}
