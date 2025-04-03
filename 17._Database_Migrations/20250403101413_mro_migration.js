
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
    return knex.schema    
        .createTable('accounts', (table) => {
           table.integer('id').notNullable().primary();
           table.string('name').notNullable();
           table.string('description');
           table.dateTime('last_transaction_date');

        })    
        .createTable('alembic_version', (table) => {
           table.string('version_num').notNullable();

        });    
}

export function down(knex) {
    return knex.schema
        .dropTable('alembic_version')
        .dropTable('accounts');
}
