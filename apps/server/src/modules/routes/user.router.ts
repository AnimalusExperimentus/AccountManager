import { Router } from 'express';
import { createUser, getUser, deleteUser, updateUser } from '../controller/user.controller'

const userRouter = Router();

//routes
userRouter.post('/createUser', createUser);
userRouter.get('/user/:id', getUser);
userRouter.delete('/deleteUser/:id', deleteUser);
userRouter.put('/updateUser/:id', updateUser)

export { userRouter };
