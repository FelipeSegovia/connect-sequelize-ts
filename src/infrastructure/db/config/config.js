require('dotenv').config();

const config = {
  username: String(process.env.DB_USER),
  password: String(process.env.DB_PASS),
  database: String(process.env.DB_NAME),
  host: String(process.env.DB_HOST),
  dialect: 'postgres',
  dialectOptions: {
    bigNumberStrings: true,
  },
};

module.exports = config;
