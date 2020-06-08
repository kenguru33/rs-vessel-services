import express, { Request, Response, NextFunction, response } from 'express';
import { signinRouter } from './routes/users/signin';
import { createUserRouter } from './routes/users/create';
import { createRoleRouter } from './routes/roles/create';
import { json } from 'body-parser';
import { errorHandler } from '@rs-vessel-services/common';
import { request } from 'http';

const app = express();

// middleware
app.use(json());
app.use((req: Request, res: Response, next: NextFunction) => {
    next(new Error('koko'));
});
// routers
app.use(signinRouter);
app.use(createUserRouter);
app.use(createRoleRouter);

// error handlers
app.use(errorHandler);

export { app };
