import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { SerializedUser, User } from 'src/users/types';

@Injectable()
export class UsersService {
    private users: User[] = [
        {
            id: 1,
            username: 'agus',
            password: '123456789'
        },
        {
            id: 2,
            username: 'iara',
            password: '12345'
        },
        {
            id: 3,
            username: 'alicia',
            password: '54321'
        },
        {
            id: 4,
            username: 'luis',
            password: '987654321'
        }
    ]

    getUsers() {
        return this.users.map((user) => new SerializedUser(user));
    }

    getUserById(id: number) {
        return this.users.find((user) => user.id === id)
    }

    createUser(userDto: CreateUserDto) {
        this.users.push(userDto)
    }
}
