import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    // Complete aqui
    const userbyID = this.usersRepository.findById(user_id);

    if (!userbyID) {
      throw new Error(`user not Found`);
    }

    const userAsAdmin = this.usersRepository.turnAdmin(userbyID);

    if (!userAsAdmin) {
      throw new Error("something wrong");
    }

    return userAsAdmin;
  }
}

export { TurnUserAdminUseCase };
