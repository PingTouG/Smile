import { Injectable } from "../deps.ts";
import { UserModel } from "../models/user.model.ts";

export interface User {
  username: String;
  phone: String;
  password: String;
}

@Injectable()
export class UserService {
  constructor(private user: UserModel) {}

  async getUsers(): Promise<User[]> {
    const result = await this.user.getUsers();
    return result;
  }
}
