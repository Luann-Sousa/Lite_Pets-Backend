import { EntityRepository, Repository } from 'typeorm';
import { UserMy_Dog } from '../entities/UserMy_Dog';

@EntityRepository(UserMy_Dog)
class UserMy_DogRepositories extends Repository<UserMy_Dog>{

};
export { UserMy_DogRepositories };