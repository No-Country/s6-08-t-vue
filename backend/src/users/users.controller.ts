import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { User } from './users.entity';
@Controller('users')
export class UsersController {


    constructor(private userService: UsersService) {

    }
    @Get()
    getUsers():Promise <User[]> {
        return this.userService.getUsers
    }


    @Post()
    createUser(@Body() newUser: CreateUserDto): Promise <User> {
        return this.userService.createUser(newUser)
    }


}
