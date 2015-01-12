class AddStatusToItems < ActiveRecord::Migration
  def change
    change_table :items do |t|
      t.integer :status, default: 0
    end
  end
end
