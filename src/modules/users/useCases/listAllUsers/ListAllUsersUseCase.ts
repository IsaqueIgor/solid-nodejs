import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute(): User[] {
    // Complete aqui
    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };
