import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "./entities/user.entity";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User, "dbOne") private user: Repository<User>,
  ) {}

  public async getAllUsers(): Promise<any> {
    return this.user.createQueryBuilder("user").getMany();
  }
}
