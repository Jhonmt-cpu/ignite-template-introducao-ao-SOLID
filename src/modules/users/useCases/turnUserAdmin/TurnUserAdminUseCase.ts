import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const checkUserExists = this.usersRepository.findById(user_id);

    if (!checkUserExists) {
      throw new Error("User doesn't exists");
    }

    const newUser = this.usersRepository.turnAdmin(checkUserExists);

    return newUser;
  }
}

export { TurnUserAdminUseCase };
