
exports.up = function(knex) {
  return knex.schema.createTable('monitor', function(table){
    table.boolean('enabled').notNullable()
    table.integer('timeout').notNullable()
  })
}

exports.down = function(knex) {
  return knex.schema.alterTable('monitor', function(table){
    table.dropColumn('enabled')
    table.dropColumn('timeout')
  })
}
