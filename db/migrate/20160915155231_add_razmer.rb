class AddRazmer < ActiveRecord::Migration
  def change
  	add_column :products, :razmer, :text
  end
end
