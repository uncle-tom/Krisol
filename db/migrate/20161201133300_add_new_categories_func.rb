class AddNewCategoriesFunc < ActiveRecord::Migration
  def change
  	add_column :categories, :description, :text
  	add_column :categories, :seotext, :text
  end
end
