class AddDeliveryTypeForOrders < ActiveRecord::Migration
  def change
  	add_column :orders, :delivery_type, :string, {null: false, default: 'Самовывоз'}
  end
end
