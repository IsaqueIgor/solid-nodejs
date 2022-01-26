import { v4 as uuidV4 } from "uuid";

class User {
  // Complete aqui
  readonly id: string;

  public name: string;
  public admin: boolean;
  public email: string;
  public created_at: Date;
  public updated_at: Date;

  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
    this.created_at = new Date();
    this.updated_at = new Date();

    if (!this.id) {
      this.id = uuidV4();
      this.admin = false;
    }
  }
}

export { User };
