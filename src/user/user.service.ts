import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/createUser.dto';
import { UpdateUserDto } from './dto/updateDto.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  getAllUser(): Promise<User[]> {
    return this.userRepository.find();
  }

  createUser(createUserDto: CreateUserDto) {
    return this.userRepository.save(createUserDto);
  }

  updateUser(updateUserDto: UpdateUserDto, id: number) {
    return this.userRepository.update(id, updateUserDto);
  }

  getUser(id: number) {
    return this.userRepository.findOne({ where: { id } });
  }

  deleteUser(id: number) {
    return this.userRepository.delete(id);
  }
}
