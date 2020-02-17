module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('shipping_companies', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        isNull: false,
      },
      fancy_name: {
        type: Sequelize.STRING,
        isNull: false,
      },
      cnpj: {
        type: Sequelize.STRING(14),
        isNull: false,
      },
      email: {
        type: Sequelize.STRING,
        isNull: false,
      },
      phone_1: {
        type: Sequelize.STRING(11),
        isNull: false,
      },
      phone_2: {
        type: Sequelize.STRING(11),
        isNull: true,
      },
      created_at: {
        type: Sequelize.DATE,
        isNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        isNull: false,
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('shipping_companies');
  },
};
