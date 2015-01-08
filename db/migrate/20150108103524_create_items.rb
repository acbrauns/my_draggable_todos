class CreateItems < ActiveRecord::Migration
  def change
    create_table :items do |t|
      t.text :text
      t.references :list
      t.timestamps null: false
    end
  end
end
