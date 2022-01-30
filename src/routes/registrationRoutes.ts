import {Request, Response, Router} from "express";
import {getJsonData, getNewID, isRegistered, writeJsonDate} from "../helpers";
import {RequestWithBody} from "./index";

const registration = Router()

registration.post('/registration', (req: RequestWithBody, res: Response) => {
    const {email, password} = req.body;

    const usersList = getJsonData('src/users/users.json');

    if (isRegistered(usersList, {email, password}, 'reg')) {
        res.send(`
            <h2>This email or password already exists</h2>
            <a href="/registration">Create a new account</a>
        `);
    } else {

        const newUsersList = [
            ...usersList,
            {
                id: getNewID(usersList),
                email,
                password
            }
        ];

        writeJsonDate('src/users/users.json', newUsersList);
        res.redirect('/login');
    }
});

registration.get('/registration', (req: Request, res: Response) => {
    res.send(`
        <form method="post">
        <h2>Create new account</h2>
            <div>
                <label for="">Email</label>
                <input type="text" name="email">
            </div>
            <div>
                <label for="">Password</label>
                <input type="password" name="password">
            </div>
            <button>Create</button>
        </form>
    `)
});

export {registration};