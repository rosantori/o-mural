const knex = require('knex');
const configuration = require('../../knexfile');

const connection = knex(configuration.development);

module.exports = connection; //Exporta daqui, e importa nos arquivos que precisa haver comunicação com o banco de dados