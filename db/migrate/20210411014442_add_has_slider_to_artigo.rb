class AddHasSliderToArtigo < ActiveRecord::Migration[6.1]
  def change
    add_column :artigos, :has_slider, :boolean
  end
end
