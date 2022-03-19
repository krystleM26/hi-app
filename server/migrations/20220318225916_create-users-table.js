
exports.up = function(knex) {
    return knex.schema.createTable('users', tbl => {
        
        tbl.increments();
        
        tbl.text('username', 128).unique().notNullable();
        // creates a numeric field called budget which is required
        tbl.text('email').notNullable();
      });
  
};

exports.down = function(knex, Promise) {
    // drops the entire table
    return knex.schema.dropTableIfExists('accounts');
  };
