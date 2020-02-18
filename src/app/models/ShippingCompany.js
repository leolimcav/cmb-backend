import { Model, DataTypes } from 'sequelize';

class ShippingCompany extends Model {
  static init(sequelize) {
    super.init(
      {
        fancy_name: DataTypes.STRING,
        cnpj: DataTypes.STRING(14),
        email: DataTypes.STRING,
        phone_1: DataTypes.STRING,
        phone_2: DataTypes.STRING,
      },
      { sequelize }
    );
  }

  static associate(models) {
    this.hasMany(models.Driver, { foreignKey: 'id', as: 'drivers' });
    this.hasMany(models.Parcel, { foreignKey: 'id', as: 'parcels' });
  }
}

export default ShippingCompany;
