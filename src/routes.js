import { Router } from 'express';

import ShippingCompanyController from './app/controllers/ShippingCompanyController';
import DriverController from './app/controllers/DriverController';

const routes = Router();

routes.get('/companies/:id', ShippingCompanyController.show);

routes.get('/companies/:id/drivers', DriverController.index);

export default routes;
