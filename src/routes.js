import { Router } from 'express';

import ShippingCompanyController from './app/controllers/ShippingCompanyController';

const routes = Router();

routes.get('/companies/:id', ShippingCompanyController.show);

export default routes;
