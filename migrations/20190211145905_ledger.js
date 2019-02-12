
exports.up = function(knex) {
  return knex.schema.createTable('ledger', function(table){
    table.increments()
    table.integer('user_id').references('id').inTable('users').notNullable()
    table.decimal('usd', 10, 2).notNullable()
    table.bigInteger('btc').notNullable()
    table.bigInteger('doge').notNullable()
    table.bigInteger('ltc').notNullable()
    table.bigInteger('xmr').notNullable()
    table.timestamp('created').notNullable().defaultTo(knex.fn.now())
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.alterTable('ledger', function(table){
    table.dropColumn('user_id')
    table.dropColumn('usd')
    table.dropColumn('btc')
    table.dropColumn('doge')
    table.dropColumn('ltc')
    table.dropColumn('xmr')
    table.dropColumn('created')
  })
};
