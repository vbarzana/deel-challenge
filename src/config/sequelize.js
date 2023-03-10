module.exports = {
  development: {
    dialect: "sqlite",
    storage: "./database.sqlite3",
  },
  test: {
    dialect: "sqlite",
    storage: "./database.sqlite3",
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql",
  },
};
