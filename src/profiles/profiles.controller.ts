import { Controller, Get, Inject } from "@nestjs/common";
import { Profile } from "./entities/profile.entity";
import { ProfilesService } from "./profiles.service";

@Controller("profiles")
export class ProfilesController {
  constructor(
    @Inject(ProfilesService) private profileService: ProfilesService,
  ) {}

  @Get()
  public async getAllProfiles(): Promise<Profile[]> {
    return this.profileService.getAllProfiles();
  }
}
