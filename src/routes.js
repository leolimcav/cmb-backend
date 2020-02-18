import { Router } from 'express';
import multer from 'multer';

import ShippingCompanyController from './app/controllers/ShippingCompanyController';
import DriverController from './app/controllers/DriverController';
import ParcelController from './app/controllers/ParcelController';
import CallerController from './app/controllers/CallerController';

import uploadConfig from './config/upload';

const upload = multer(uploadConfig);

const routes = Router();

routes.get('/companies/:id', ShippingCompanyController.show);

routes.get('/companies/:id/drivers', DriverController.index);

routes.get('/companies/:id/parcels', ParcelController.index);

routes.get('/drivers/:id/parcels', ParcelController.show);

routes.post(
  '/companies/:id/parcels',
  upload.single('csv'),
  ParcelController.create
);

routes.put('/companies/parcels/:id', ParcelController.update);

routes.post('/parcels/:id/call', CallerController.create);
routes.get('/parcels/call/:id', CallerController.show);

export default routes;
