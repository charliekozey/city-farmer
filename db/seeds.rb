# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

gameObjectArray = GameObject.create([
    {name: "1", x_coord: 68, y_coord: 26, sprite_url: "/client/src/plant-1.png", is_interactive: false},
    {name: "2", x_coord: 83, y_coord: 26, sprite_url: "/client/src/plant-2.png", is_interactive: false},
    {name: "3", x_coord: 98, y_coord: 26, sprite_url: "/client/src/plant-3.png", is_interactive: false},
    {name: "4", x_coord: 113, y_coord: 26, sprite_url: "/client/src/plant-4.png", is_interactive: false},
    {name: "5", x_coord: 128, y_coord: 26, sprite_url: "/client/src/plant-5.png", is_interactive: false},
])