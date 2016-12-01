class AddNewRulesForProductOwnComplectAge < ActiveRecord::Migration
  def change
  	add_column :products, :complect, :text
  	add_column :products, :own, :text
  	add_column :products, :age, :text
  end
end
