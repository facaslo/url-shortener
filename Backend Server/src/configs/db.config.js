const env = process.env;

const db = {
  database: env.DB_NAME,
  user: env.DB_ROLE,
  password: env.DB_PASSWORD,
  host: env.DB_HOST,
  port: env.DB_PORT
};

module.exports = db;