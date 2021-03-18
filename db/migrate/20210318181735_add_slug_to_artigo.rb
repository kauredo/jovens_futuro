class AddSlugToArtigo < ActiveRecord::Migration[6.1]
  def change
    add_column :artigos, :slug, :string
    add_index :artigos, :slug, unique: true
  end
end
