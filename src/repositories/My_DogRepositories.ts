import { EntityRepository , Repository } from "typeorm";

import { Dog } from '../entities/My_Dog';

@EntityRepository(Dog)
class My_DogRepositories extends Repository<Dog>{

};
export { My_DogRepositories };