import { Controller, Get, Inject } from "@nestjs/common";
import { User } from "./entities/user.entity";
import { UsersService } from "./users.service";

@Controller("users")
export class UsersController {
  constructor(@Inject(UsersService) private userService: UsersService) {}

  @Get()
  public async getAllUsers(): Promise<User> {
    return this.userService.getAllUsers();
  }
}
