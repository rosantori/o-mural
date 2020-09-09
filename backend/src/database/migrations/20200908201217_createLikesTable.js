
exports.up = function(knex) {
    return knex.schema.createTable('likes', function(table) {
        table.string('user_id').notNullable();
        table.string('post_id').notNullable();
        table.string('like').notNullable(); //like = 1 dislike = 0 etc etc
        table.foreign('user_id').references('id').inTable('users');
        table.foreign('post_id').references('id').inTable('posts');
        table.unique(['user_id', 'post_id']);
    })
};

exports.down = function(knex) {
  return knex.schema.dropTable('likes');
};
