class AddCoverPhotoCat < ActiveRecord::Migration
  def change
  	add_column :categories, :cover_photo_cat_id, :integer
  end
end
