import { Area } from "../deps.ts";
import { UserController } from "./app/user.controller.ts";

@Area({
  controllers: [
    UserController,
  ],
})
export class AppArea {}
