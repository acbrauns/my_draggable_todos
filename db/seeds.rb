# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#

require 'faker'
  # cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
  # Mayor.create(name: 'Emanuel', city: cities.first)

  # item = Item.create({text: "Hello"})


10.times do |i|
  Item.create({
    :text => Faker::Lorem.sentence
    })
end
