import { NextFunction, Request, Response, Router } from "express";
import { getAllUsers, createNewUser } from "../logic/auth-logic";


export const authRouter = Router();

authRouter.get('/users', async (req: Request, res: Response, next: NextFunction) => {
    const resoult = await getAllUsers();
    res.json(resoult);
})

authRouter.post('/register', async (req: Request, res: Response, next: NextFunction) => {
    const resoult = await createNewUser(req.body);
    res.json(resoult);
})