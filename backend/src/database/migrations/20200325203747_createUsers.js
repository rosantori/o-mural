
exports.up = function(knex) {
  return knex.schema.createTable('users', function(table) {
      table.string('id').primary();
      table.string('username').notNullable().unique();
      table.string('email').notNullable().unique();
      table.string('name').notNullable();
      table.string('country').notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
