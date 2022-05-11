class CreateGameObjects < ActiveRecord::Migration[6.1]
  def change
    create_table :game_objects do |t|
      t.string :name
      t.integer :x_coord
      t.integer :y_coord
      t.string :sprite_url
      t.boolean :is_interactive

      t.timestamps
    end
  end
end
