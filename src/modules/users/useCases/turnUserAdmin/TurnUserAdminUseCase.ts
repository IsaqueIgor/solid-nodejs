import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    // Complete aqui
    const userAlreadyExists = this.usersRepository.findById(user_id);

    if (!userAlreadyExists) {
      throw new Error(`user doesn't exists!`);
    }

    const user = this.usersRepository.findById(user_id);

    this.usersRepository.turnAdmin(user);

    return user;
  }
}

export { TurnUserAdminUseCase };
