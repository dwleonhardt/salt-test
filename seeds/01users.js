
exports.seed = function(knex) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        {id: 1, name: 'Huey'},
        {id: 2, name: 'Dewey'},
        {id: 3, name: 'Louie'}
      ])
      .then(() => {
        return knex.raw("SELECT setval('users_id_seq', (SELECT MAX(id) FROM users))");
      })
    })
};
