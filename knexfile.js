
module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './data/joy.db3'
    }
  },
  migrations: {
    directory: './data/migrations'
  }, 
  seeds: {
    directory: './data'
  },
  testing: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './data/test.db3'
    }
  },
  migrations: {
    directory: './data/migrations'
  }, 
  seeds: {
    directory: './data'
  },
  // testing: {

  //   connection: {
  //     filename: 
  //   }
  };

  // staging: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // },

  // production: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
    // migrations: {
    //   tableName: 'knex_migrations'
    // }
  //}

//};
