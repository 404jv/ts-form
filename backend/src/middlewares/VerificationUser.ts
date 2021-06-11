import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import * as yup from 'yup';
import { AppError } from "../errors/AppError";
import UsersRepository from "../repositories/UsersRepository";

class VerificationUser {
  async verify(req: Request, res: Response) {
    const { email } = req.body;

    const schema = yup.object().shape({
      name: yup.string().required(),
      last_name: yup.string().required(),
      email: yup.string().required(),
      job: yup.string().required(),
      seniority: yup.string().required(),
      technoligies: yup.string().required(),
      about: yup.string().required(),
    });

    try {
      await schema.validate(req.body, { abortEarly: false });
    } catch (error) {
      throw new AppError(error);
    }

    const repository = getCustomRepository(UsersRepository);

    const isUserAlreadyExists = await repository.findOne({ where: { email } });

    if (isUserAlreadyExists) {
      throw new AppError('User Already Exists!');
    }
  }
}

export default VerificationUser;
