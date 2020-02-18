module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert(
      'drivers',
      [
        {
          name: 'John Doe',
          cpf: '99999999999',
          access_code: '123456',
          company: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('drivers', null, {});
  },
};
