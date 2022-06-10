const options = {
  mariaDB: {
    client: "mysql",
    connection: {
      host: "127.0.0.1",
      user: "root",
      password: "1234",
      database: "ecommerce",
    },
  },
  sqlite: {
    client: "sqlite3",
    connection: {
      filename: "./mensajes.sqlite",
    },
    useNullAsDefault: true,
  },
};

module.exports = { options }
