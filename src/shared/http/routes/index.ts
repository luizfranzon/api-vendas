import { Router } from 'express';
import usersRouter from '@modules/users/routes/users.routes';
import productsRouter from '@modules/products/routes/products.routes';
import sessionRouter from '@modules/users/routes/sessions.routes';

const routes = Router();

routes.use('/products', productsRouter);
routes.use('/users', usersRouter);
routes.use('/sessions', sessionRouter);

export default routes;
