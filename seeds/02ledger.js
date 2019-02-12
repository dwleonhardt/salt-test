
exports.seed = function(knex) {
  return knex('ledger').del()
    .then(function () {
      return knex('ledger').insert([
        {user_id: 1, usd: 10000, btc: 0, doge: 0, ltc: 0, xmr: 0},
        {user_id: 2, usd: 10000, btc: 0, doge: 0, ltc: 0, xmr: 0},
        {user_id: 3, usd: 10000, btc: 0, doge: 0, ltc: 0, xmr: 0}
      ]);
    });
};
