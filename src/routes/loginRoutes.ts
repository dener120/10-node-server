import {Router, Request, Response} from "express";

import {isRegistered,getJsonData} from '../helpers'

export interface RequestWithBody extends Request {
    body: { [key: string]: string | undefined }
}

const login = Router();

login.get('/login', (req: Request, res: Response) => {
    res.send(`
        <form method="post">
        <h2>Log In</h2>
            <div>
                <label for="">Email</label>
                <input type="text" name="email">
            </div>
            <div>
                <label for="">Password</label>
                <input type="password" name="password">
            </div>
            <button>Submit</button>
            <p>Don't have an account? <a href="/registration">Create a new account</a></p>
        </form>
    `);
});

login.post('/login', (req: RequestWithBody, res: Response) => {
    const {email, password} = req.body;

    const totalUsers = getJsonData('src/users/users.json')

    if (isRegistered(totalUsers, {email, password}, 'log')) {
        req.session = {loggedIn: true, userEmail: email};
        res.redirect('/');
    } else {
        res.send('Invalid email or password');
    }
});


export {login};
