class AddDescriptionToColaborators < ActiveRecord::Migration[6.1]
  def change
    add_column :colaborators, :description, :text
  end
end
