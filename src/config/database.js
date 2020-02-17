require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
});

module.exports = {
  host: 'localhost',
  username: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DATABASE,
  port: process.env.PG_PORT,
  dialect: process.env.DB_DIALECT || 'postgres',
  storage: './__tests__/database.sqlite',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
