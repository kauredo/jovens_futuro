class CreateComments < ActiveRecord::Migration[6.1]
  def change
    create_table :comments do |t|
      t.references :artigo, foreign_key: true
      t.string :name
      t.string :email
      t.text :comment, null: false
      t.timestamps
    end
  end
end
