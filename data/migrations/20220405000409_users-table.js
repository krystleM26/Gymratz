
exports.up = function(knex) {
  return knex.schema.createTable('users', tbl => {
      tbl.increments()
      tbl.text('name', 100).notNullable()
      tbl.string('username', 125).unique().notNullable()
      tbl.string('password', 125).notNullable()
      tbl.string('type', 100).notNullable()

      
  
    
  })
  .createTable('classes', tbl => {
      tbl.increments()
      tbl.date('date').notNullable()
      tbl.time('time').notNullable()
      tbl.integer('duration').notNullable()
      tbl.string('type', 100).notNullable()
      tbl.string('intensity', 20).notNullable()
      tbl.string('location', 125).notNullable()
   


  })
  .createTable('instructors', tbl => {
      tbl.increments()
      tbl.string('name', 125).notNullable()
      tbl.string('start-time', 100).notNullable()
      tbl.integer('duration').notNullable()
      tbl.integer('attendees', 100).notNullable()
      tbl.string('intensity', 20).notNullable()
      tbl.string('location', 125).notNullable()
      tbl.integer('maximum', 30).notNullable()
  })
};



exports.down = function(knex, Promise) {
  return knex.schema

.dropTableIfExists('users')
.dropTableIfExists('instructors')
.dropTableIfExists('classes')

}
