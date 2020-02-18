import csvParse from 'csv-parse';
import { createReadStream } from 'fs';
import { resolve } from 'path';

import Parcel from '../models/Parcel';
import Driver from '../models/Driver';
import ShippingCompany from '../models/ShippingCompany';

class ParcelController {
  async index(req, res) {
    const { id } = req.params;

    const parcels = await Parcel.findAll({
      include: [
        {
          model: ShippingCompany,
          foreignKey: id,
          as: 'shipping_company',
          attributes: [],
        },
      ],
    });

    return res.json(parcels);
  }

  async show(req, res) {
    const { id } = req.params;

    const parcels = await Parcel.findAll({
      include: [
        {
          model: Driver,
          foreignKey: id,
          as: 'driver',
          attributes: [],
        },
      ],
    });

    return res.json(parcels);
  }

  async create(req, res) {
    const csv = createReadStream(
      resolve(__dirname, '..', '..', '..', 'tmp', `${req.file.filename}`)
    );
    const parser = csvParse({
      delimiter: ':',
      ltrim: true,
      rtrim: true,
      cast: true,
    });

    csv.pipe(parser);
    parser.on('data', async line => {
      const { company } = req.params;
      const [
        tracking_code,
        receiver_name,
        receiver_cpf,
        receiver_phone,
        driver,
      ] = line;
      await Parcel.create({
        tracking_code,
        receiver_name,
        receiver_cpf,
        receiver_phone,
        company,
        driver,
      });
    });

    return res.json({ message: 'Upload Finished' });
  }

  async update(req, res) {
    const { id } = req.params;
    const { receiver_phone } = req.body;

    const parcel = await Parcel.findByPk(id);

    await parcel.update({ receiver_phone });

    return res.json(parcel);
  }
}

export default new ParcelController();
