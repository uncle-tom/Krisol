class CreateCategoryPhoto < ActiveRecord::Migration
  def change
    create_table :category_photos do |t|
    	t.string :image
      t.integer :category_id
      
      t.timestamps null: false
    end
  end
end
