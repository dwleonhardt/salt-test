
exports.up = function(knex) {
  return knex.schema.createTable('currency', function(table){
    table.increments();
    table.string('name', 255).notNullable();
    table.decimal('price_usd').notNullable().defaultTo(0);
    table.decimal('price_btc').notNullable().defaultTo(0);
    table.timestamp('created').notNullable().defaultTo(knex.fn.now());

  });
};

exports.down = function(knex) {
  return knex.schema.alterTable('price', function(table){
    table.dropColumn('name')
    table.dropColumn('price_usd')
    table.dropColumn('price_btc');
  });
};
