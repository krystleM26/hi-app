
exports.up = function(knex) {
  return knex.schema.createTable('users', tbl => {
      tbl.increments();
      tbl.text('username', 128)
      .unique()
      .notNullable()
      tbl.text('email')
      
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableItExists('users')
};
