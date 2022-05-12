# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

gameObjectArray = GameObject.create([
    {name: "1", x_coord: 68, y_coord: 26, sprite_url: "/client/src/soil.png", is_interactive: false},
    {name: "2", x_coord: 83, y_coord: 26, sprite_url: "/client/src/soil.png", is_interactive: false},
    {name: "3", x_coord: 98, y_coord: 26, sprite_url: "/client/src/soil.png", is_interactive: false},
    {name: "4", x_coord: 113, y_coord: 26, sprite_url: "/client/src/soil.png", is_interactive: false},
    {name: "5", x_coord: 128, y_coord: 26, sprite_url: "/client/src/soil.png", is_interactive: false},
    {name: "letter", x_coord: 170, y_coord: 60, sprite_url: "/client/src/soil.png", is_interactive: false},
])

messageArray = Message.create([
    {message_text: "Dear Sara,\nCongratulations on your new apartment! I hope it's comfortable and that you get along with your neighbors. I thought you might like this radish seed to start your window garden. Call me if you need anything. Love you!\nAuntie Lou"},
    {message_text: "Hey neighbor. Got some heavy zucchini action going on in my roof garden. Take a couple off my hands, would ya? I threw some sweet potato seeds in there too.\n—Vinny Sal"},
    {message_text: "Hi there,\nWanted to send some flowers from my balcony garden as a welcome present. Knock on my door if you need anything or just want to say hi. I hope to meet you soon!\nTracy, Apartment 3"},
    {message_text: "My babies laid hella eggs this week. Please take some! I leave the surplus in my coffin on the first floor. I guess that sounds weird but the guy I got it from on Craigslist said it should be perfectly fine. Welcome to the building!\nBrunhilde"}
])