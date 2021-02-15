class Artigo < ApplicationRecord
  CATEGORIAS = %w(Economia Política Sociedade Saúde Mundo Desporto Cultura Fotografia).freeze

  has_rich_text :contents
  belongs_to :user
  scope :published, -> { where(published: true).joins(:user).where(user: { confirmed: true }) }
end
