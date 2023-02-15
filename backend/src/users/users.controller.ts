import { Controller, Get, Post, Delete, Patch, Body, Param, ParseIntPipe } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { User } from './user.entity';
@Controller('users')
export class UsersController {


    constructor(private userService: UsersService) {

    }

//-----------------------------------------------------
    @Get()
    getUsers(): Promise<User[]> {
        return this.userService.getUsers
    }


//-----------------------------------------------------
    @Post()
    //Quitamos el : Promise<User>  ya que puede devolver una excepcion
    //tambien
    createUser(@Body() newUser: CreateUserDto){
        return this.userService.createUser(newUser)
    }

    //ParseIntPipe sirve p/ parcear el resultado id
    //sin este metodo recibiria un string
    
//-----------------------------------------------------    
    @Get(':id')
    getUser(@Param('id', ParseIntPipe) id: number) {
        return this.userService.getUser()
    }

//-----------------------------------------------------
    @Delete(':id')
    deleteUser(@Param('id', ParseInPipe) id: number) {
        return this.userService.deleteUser()
    }

//-----------------------------------------------------
    @Patch(':id')
    updateUser(@Param('id,ParseIntPipe') id: number, @Body()
    user: UpdateUserDto) {
        return this.userService.updateUser(id, user)
    }
}
