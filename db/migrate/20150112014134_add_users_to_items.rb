class AddUsersToItems < ActiveRecord::Migration
  def change
    change_table :items do |t|
      t.references :user
    end
  end
end
