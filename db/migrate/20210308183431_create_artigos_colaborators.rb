class CreateArtigosColaborators < ActiveRecord::Migration[6.1]
  def change
    create_table :artigos_colaborators do |t|
      t.references :artigo, foreign_key: true
      t.references :colaborator, foreign_key: true
      t.timestamps
    end
  end
end
