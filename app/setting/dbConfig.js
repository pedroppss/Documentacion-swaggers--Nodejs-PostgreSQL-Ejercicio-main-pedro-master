module.exports = {
  HOST: "localhost",
  USER: "postgres",
  PASSWORD: "123456789",
  DB: "departments",
  dialect: "postgres",
  port: 5432,
  pool: {
    max: 7,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};