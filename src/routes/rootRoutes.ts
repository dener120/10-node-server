import {Response, Router} from "express";
import {RequestWithBody} from "./loginRoutes";

const root = Router();

root.get('/', (req: RequestWithBody, res: Response) => {
    if (req.session && req.session.loggedIn) {
        res.send(`
            <div>
                <div>You are logged in</div>
                <div>${req.session.userEmail}</div>
                <a href="/logout">Logout</a>
            </div>
        `)
    } else {
        res.send(`
            <div>
                <div>You are not logged in</div>
                <a href="/login">Login</a>
            </div>
        `)
    }
});

export {root};