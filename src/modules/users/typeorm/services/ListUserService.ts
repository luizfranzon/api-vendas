import { getCustomRepository, Repository } from 'typeorm';
import UsersRepository from '../repositories/UsersRepository';
import User from '../entities/User';

class ListUserService extends Repository<User> {
  public async execute(): Promise<User[]> {
    const usersRepository = getCustomRepository(UsersRepository);
    const users = await usersRepository.find();

    return users;
  }
}

export default ListUserService;
