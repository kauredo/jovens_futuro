class AddCategoryAndPublishedAtToArtigo < ActiveRecord::Migration[6.1]
  def change
    add_column :artigos, :categoria, :text
    add_column :artigos, :published_at, :datetime
  end
end
