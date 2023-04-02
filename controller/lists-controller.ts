import { NextFunction, Request, Response, Router } from "express";

import { createNewList, getAllLists } from "../logic/lists-logic";

export const listsRouter = Router();

listsRouter.get('/lists', async (req: Request, res: Response, next: NextFunction) => {
    const resoult = await getAllLists();
    res.json(resoult);
})

listsRouter.post('/lists', async (req: Request, res: Response, next: NextFunction) => {
    const resoult = await createNewList(req.body);
    res.json(resoult);
})