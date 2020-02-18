module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('parcels', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      tracking_code: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      receiver_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      receiver_cpf: {
        type: Sequelize.STRING(11),
        allowNull: false,
      },
      receiver_phone: {
        type: Sequelize.STRING(11),
        allowNull: false,
      },
      company: {
        type: Sequelize.INTEGER,
        references: {
          model: 'shipping_companies',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: true,
        defaultValue: 1,
      },
      driver: {
        type: Sequelize.INTEGER,
        references: {
          model: 'drivers',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true,
        defaultValue: 1,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('parcels');
  },
};
