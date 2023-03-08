import express, { Express } from 'express';
import cors from 'cors';

import Environment from './config';
import router from './app/router';

export const app: Express = express();

const PORT = Environment.PORT || 4000;

//Middleware
app.use(cors());
app.use(express.json());

//Routers
router(app);

//Sever Listen
app.listen(PORT, () => {
    console.log(`Server Listen in PORT: ${PORT}`);
});