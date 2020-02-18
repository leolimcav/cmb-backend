import Driver from '../models/Driver';
import ShippingCompany from '../models/ShippingCompany';

class DriverController {
  async index(req, res) {
    const { id } = req.params;

    const drivers = await Driver.findAll({
      include: [
        {
          model: ShippingCompany,
          foreignKey: id,
          as: 'company',
          attributes: [],
        },
      ],
    });

    return res.json(drivers);
  }
}

export default new DriverController();
