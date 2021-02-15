class RemoveContentFromArtigos < ActiveRecord::Migration[6.1]
  def change
    remove_column :artigos, :content
  end
end
