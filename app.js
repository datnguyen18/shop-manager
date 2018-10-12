const Sequelize = require('sequelize');
const sequelize = new Sequelize('shop-manager', 'dat', '1', {
  host: 'localhost',
  dialect: 'postgres',

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

  // http://docs.sequelizejs.com/manual/tutorial/querying.html#operators
  operatorsAliases: false
});

const User = sequelize.define('user', {
  username: Sequelize.STRING,
  birthday: Sequelize.DATE
});

const Customer = sequelize.define('custommer' , {
    username: Sequelize.STRING,
    birthday: Sequelize.DATE
})

 User.create({
    username: 'janedoe',
    birthday: new Date(1980, 6, 20)
  })
  .then(jane => {
    console.log(jane.toJSON());
  });
  Customer.create({
    username: 'janedoe',
    birthday: new Date(1980, 6, 20)
  })
  .then(jane => {
    console.log(jane.toJSON());
  });
