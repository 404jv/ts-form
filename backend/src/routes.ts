import { Router } from 'express';
import UserController from './controllers/UserController';
import VerificationUser from './middlewares/VerificationUser';

const routes = Router();

const userController = new UserController();
const verificationUser = new VerificationUser()

routes.post('/users', verificationUser.verify, userController.create);

export default routes;
