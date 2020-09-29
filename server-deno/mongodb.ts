import { MongoClient, Database } from "./deps.ts";

export class MongoDB {
  client: MongoClient;
  db: Database;

  constructor() {
    this.client = new MongoClient();
    this.client.connectWithUri("mongodb://localhost:27017");
    this.db = this.client.database("smile");
  }
}
