const Knex = require('Knex');
const configuration = require('../../Knexfile');

const connection = Knex(configuration.development);

module.exports = connection;