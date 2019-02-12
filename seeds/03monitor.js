
exports.seed = function(knex, Promise) {
  return knex('monitor').del()
    .then(function () {
      return knex('monitor').insert([
        {enabled: true, timeout: 15000}
      ])
    })
};
