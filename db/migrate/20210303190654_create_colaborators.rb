class CreateColaborators < ActiveRecord::Migration[6.1]
  def change
    create_table :colaborators do |t|
      t.string :avatar
      t.string :name
      t.timestamps
    end

    add_reference :artigos, :colaborator, index: true
    remove_column :artigos, :user_id, :string
  end
end
