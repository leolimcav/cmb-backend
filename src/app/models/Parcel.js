import { Model, DataTypes } from 'sequelize';

class Parcel extends Model {
  static init(sequelize) {
    super.init(
      {
        tracking_code: DataTypes.STRING,
        receiver_name: DataTypes.STRING,
        receiver_cpf: DataTypes.STRING(11),
        receiver_phone: DataTypes.STRING(11),
      },
      { sequelize }
    );
  }

  static associate(models) {
    this.belongsTo(models.ShippingCompany, {
      foreignKey: 'id',
      as: 'shipping_company',
    });
    this.belongsTo(models.Driver, {
      foreignKey: 'id',
      as: 'driver',
    });
  }
}

export default Parcel;
