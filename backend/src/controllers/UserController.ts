import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import UsersRepository from "../repositories/UsersRepository";

class UserController {
  async create(req: Request, res: Response) {
    const {
      name,
      last_name,
      email,
      job,
      seniority,
      technoligies,
      about
    } = req.body;

    const repository = getCustomRepository(UsersRepository);

    const user = repository.create({
      name,
      last_name,
      email,
      job,
      seniority,
      technoligies,
      about
    });

    await repository.save(user);

    console.log(`🆕 Created User ${user.name}`);

    return res.status(201).json(user);
  }
}

export default UserController;
