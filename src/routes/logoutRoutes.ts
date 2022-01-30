import {Request, Response, Router} from "express";

const logout = Router();

logout.get('/logout', (req: Request, res: Response) => {
    req.session = undefined;
    res.redirect('/');
});

export {logout};