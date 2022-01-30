import {Router, Request, Response, NextFunction} from "express";

export interface RequestWithBody extends Request {
    body: { [key: string]: string | undefined }
}

export const router = Router();

export function requireAuth(req: Request, res: Response, next: NextFunction): void {
    if (req.session && req.session.loggedIn) {
        next();
        return;
    }
}
