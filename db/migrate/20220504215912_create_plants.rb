class CreatePlants < ActiveRecord::Migration[6.1]
  def change
    create_table :plants do |t|
      t.string :name
      t.string :stage_1
      t.string :stage_2
      t.string :stage_3
      t.string :stage_4
      t.integer :days_to_1
      t.integer :days_to_2
      t.integer :days_to_3
      t.integer :days_to_4
      t.integer :days_to_5

      t.timestamps
    end
  end
end
