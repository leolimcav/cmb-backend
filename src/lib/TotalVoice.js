import { config } from 'dotenv';
import Totalvoice from 'totalvoice-node';

config();
export default new Totalvoice(
  process.env.ACCESS_TOKEN,
  'https://api2.totalvoice.com.br'
);
