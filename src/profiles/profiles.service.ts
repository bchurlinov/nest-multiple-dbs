import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Profile } from "./entities/profile.entity";

@Injectable()
export class ProfilesService {
  constructor(
    @InjectRepository(Profile, "dbTwo") private profile: Repository<Profile>,
  ) {}

  public async getAllProfiles(): Promise<Profile[]> {
    return await this.profile.find();
  }
}
