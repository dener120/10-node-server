import {Request, Response, Router} from "express";
import {requireAuth} from "./index";

const protect = Router();

protect.get('/protected', requireAuth, (req: Request, res: Response) => {
    res.send('Welcome to protected route, logged in user');
});

export {protect}