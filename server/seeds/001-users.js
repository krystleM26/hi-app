
exports.seed = function(knex) {
  // Reset Primary keyALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username:'Username Test', email: 'imaemail@email.com'},
        {username:'Username Test 2', email: 'imaemail@email.com'},
        {username:'Username Test 3', email: 'imaemail@email.com'}
      ]);
})
};
