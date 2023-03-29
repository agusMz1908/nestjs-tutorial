import { ClassSerializerInterceptor, Controller, Get, HttpException, HttpStatus, Inject, Param, ParseIntPipe, UseInterceptors } from '@nestjs/common';
import { UsersService } from 'src/users/services/users/users.service';
import { SerializedUser } from 'src/users/types';

@Controller('users')
export class UsersController {

    constructor(@Inject('USER_SERVICE') private readonly userService: UsersService,
    ) { }

    @UseInterceptors(ClassSerializerInterceptor)
    @Get('')
    getUsers() {
        return this.userService.getUsers()
    }

    @UseInterceptors(ClassSerializerInterceptor)
    @Get('/:id')
    getUserById(@Param('id', ParseIntPipe) id: number) {
        const user = this.userService.getUserById(id)
        if (user) return new SerializedUser(user)
        else throw new HttpException('User not found', HttpStatus.BAD_REQUEST)
    }
}
