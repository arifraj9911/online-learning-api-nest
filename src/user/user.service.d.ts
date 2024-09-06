import { User } from './entity/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/createUser.dto';
import { UpdateUserDto } from './dto/updateDto.dto';
export declare class UserService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    getAllUser(): Promise<User[]>;
    createUser(createUserDto: CreateUserDto): Promise<CreateUserDto & User>;
    updateUser(updateUserDto: UpdateUserDto, id: number): Promise<import("typeorm").UpdateResult>;
    getUser(id: number): Promise<User>;
    findByEmail(email: string): Promise<User>;
    deleteUser(id: number): Promise<import("typeorm").DeleteResult>;
}
