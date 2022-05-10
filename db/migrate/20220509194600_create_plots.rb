class CreatePlots < ActiveRecord::Migration[6.1]
  def change
    create_table :plots do |t|
      t.boolean :has_plant

      t.timestamps
    end
  end
end
