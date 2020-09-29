import { Controller, Get } from "../../deps.ts";
import { UserService } from "../../services/user.service.ts";

@Controller("/api/user")
export class UserController {
  constructor(private service: UserService) {}

  @Get()
  json() {
    return this.service.getUsers();
  }
}
