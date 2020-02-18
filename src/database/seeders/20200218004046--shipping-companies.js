module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert(
      'shipping_companies',
      [
        {
          fancy_name: 'Transportadora Exemplo',
          cnpj: '00000000000000',
          email: 'transpexemp@email.com',
          phone_1: '85999999999',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('shipping_companies', null, {});
  },
};
