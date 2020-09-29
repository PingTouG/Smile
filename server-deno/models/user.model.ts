import { Injectable } from "../deps.ts";
import { MongoDB } from "../mongodb.ts";
import { Collection } from "../deps.ts";

export interface User {
  username: String;
  phone: String;
  password: String;
}

@Injectable()
export class UserModel {
  user: Collection<unknown>;

  constructor(private mongodb: MongoDB) {
    this.user = mongodb.db.collection("user");
  }

  async getUsers(): Promise<User[]> {
    const result = await this.user.find({}) as Array<User>;
    return result;
  }
}
