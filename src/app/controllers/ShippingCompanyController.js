import ShippingCompany from '../models/ShippingCompany';

class ShippingCompanyController {
  async show(req, res) {
    const { id } = req.params;

    const company = await ShippingCompany.findByPk(id);

    return res.json(company);
  }
}

export default new ShippingCompanyController();
