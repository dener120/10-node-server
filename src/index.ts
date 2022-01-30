import express from 'express';
import {registration} from "./routes/registrationRoutes";
import {login} from "./routes/loginRoutes";
import {logout} from "./routes/logoutRoutes";
import {root} from "./routes/rootRoutes";
import {protect} from './routes/protectedRoutes'

import cookieSession from "cookie-session";


const app = express();

app.use(express.urlencoded({extended: true}));
app.use(cookieSession({ keys: ['dfdfdfdf'] }));
app.use(registration);
app.use(login);
app.use(logout);
app.use(root);
app.use(protect);


app.listen(3000, () => {
    console.log('Listening on port 3000');
});