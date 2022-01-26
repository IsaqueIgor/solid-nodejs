import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ShowUserProfileUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    // Complete aqui
    const userAlreadyExists = this.usersRepository.findById(user_id);

    if (!userAlreadyExists) {
      throw new Error(`user not found!`);
    }

    const user = this.usersRepository.findById(user_id);

    return user;
  }
}

export { ShowUserProfileUseCase };
