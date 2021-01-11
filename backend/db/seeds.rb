# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Fish.create(name: 'catfish', buyer_id: 1, price: 10)
Fish.create(name: 'bass', buyer_id: 1, price: 20)

Buyer.create(name: 'Walt', email: 'walt@walt.com')

