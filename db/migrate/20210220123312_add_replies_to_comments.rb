class AddRepliesToComments < ActiveRecord::Migration[6.1]
  def change
    add_reference :comments, :parent, index: true
  end
end
