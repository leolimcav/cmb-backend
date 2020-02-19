import { Model, DataTypes } from 'sequelize';

class Driver extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        cpf: DataTypes.STRING(11),
        access_code: DataTypes.STRING,
      },
      { sequelize }
    );
  }

  static associate(models) {
    this.belongsTo(models.ShippingCompany, { foreignKey: 'id', as: 'company' });
    this.hasMany(models.Parcel, { foreignKey: 'id', as: 'parcel' });
  }
}

export default new Driver();
