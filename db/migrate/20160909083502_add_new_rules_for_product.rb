class AddNewRulesForProduct < ActiveRecord::Migration
  def change
  	add_column :products, :is_soft, :boolean
  	add_column :products, :is_set, :boolean
  	add_column :products, :is_figures, :boolean
  	add_column :products, :is_board, :boolean
  	add_column :products, :is_puzzles, :boolean
  	add_column :products, :full_description, :text
  	add_column :products, :url_video, :string
  end
end
