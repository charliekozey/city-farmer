class CreateBackpacks < ActiveRecord::Migration[6.1]
  def change
    create_table :backpacks do |t|
      t.string :name
      t.string :item_1
      t.string :item_2
      t.string :item_3
      t.string :item_4
      t.string :item_5

      t.timestamps
    end
  end
end
