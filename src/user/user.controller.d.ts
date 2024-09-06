import { UserService } from './user.service';
import { CreateUserDto } from './dto/createUser.dto';
import { UpdateUserDto } from './dto/updateDto.dto';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    getAllUser(): Promise<import("./entity/user.entity").User[]>;
    createUser(createUserDto: CreateUserDto): Promise<CreateUserDto & import("./entity/user.entity").User>;
    updateUser(updateUserDto: UpdateUserDto, id: number): Promise<import("typeorm").UpdateResult>;
    getUser(id: number): Promise<import("./entity/user.entity").User>;
    deleteUser(id: number): Promise<import("typeorm").DeleteResult>;
}
