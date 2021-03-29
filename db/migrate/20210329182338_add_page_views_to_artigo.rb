class AddPageViewsToArtigo < ActiveRecord::Migration[6.1]
  def change
    add_column :artigos, :page_views, :integer, default: 0
  end
end
