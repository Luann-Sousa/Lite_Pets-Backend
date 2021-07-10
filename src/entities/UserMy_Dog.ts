import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn} from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity("usersMyDog")
class UserMy_Dog{

  @PrimaryColumn()
  idUsersMydog: string;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor(){
    if(!this.idUsersMydog){
      this.idUsersMydog = uuid();
    }
  }

}

export { UserMy_Dog };