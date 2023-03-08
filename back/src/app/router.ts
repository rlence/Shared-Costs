import { Express } from 'express';

//Routers
import userRouter from "./user/network";

const URL_BASE = '/api'

const router = (app: Express): void => {
    app.use(`${URL_BASE}/user`, userRouter );
}

export default router;