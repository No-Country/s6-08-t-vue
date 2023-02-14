import { Controller, Get, Post, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { User } from './users.entity';
@Controller('users')
export class UsersController {


    constructor(private userService: UsersService) {

    }
    @Get()
    getUsers(): Promise<User[]> {
        return this.userService.getUsers
    }


    @Post()
    createUser(@Body() newUser: CreateUserDto): Promise<User> {
        return this.userService.createUser(newUser)
    }

    //ParseIntPipe sirve p/ parcear el resultado id
    //sin este metodo recibiria un string
    @Get(':id')
    getUser(@Param('id', ParseIntPipe) id: number): Promise<User> {
        return this.userService.getUser()
    }

    @Delete(':id')
    deleteUser(@Param('id', ParseInPipe) id: number) {
        return this.userService.deleteUser()
    }

}
