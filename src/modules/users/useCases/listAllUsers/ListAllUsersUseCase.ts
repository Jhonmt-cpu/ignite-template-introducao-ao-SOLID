import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const checkUserExists = this.usersRepository.findById(user_id);

    if (!checkUserExists) {
      throw new Error("User doesn't exists");
    }

    if (!checkUserExists.admin) {
      throw new Error("You must be an admin to list the users");
    }

    const usersList = this.usersRepository.list();

    return usersList;
  }
}

export { ListAllUsersUseCase };
