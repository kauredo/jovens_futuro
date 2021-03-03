class Artigo < ApplicationRecord
  CATEGORIAS = %w(Economia Política Sociedade Saúde Mundo Desporto Cultura Fotografia).freeze

  has_rich_text :contents
  belongs_to :colaborator
  has_many :comments
  scope :last_first, -> { all.reverse }
  scope :published, -> { where(published: true).order({ published_at: :desc }) }
  scope :novo, -> { where('published_at > ?', 3.days.ago) }
  scope :from_colaborador, ->(colaborador) { joins(:colaborador).where(colaborador: { name: colaborador }) }

  class << self
    def per_page
      10
    end

    def pages(per_page = self.per_page)
      pages = count / per_page.to_f
      pages += 1 if (pages % 1).positive?
      pages.to_i
    end

    def paginate(page: 1, per_page: self.per_page)
      page = page.to_i
      per_page = per_page.to_i

      offset = (page - 1) * per_page
      limit(per_page).offset(offset)
    end

    def ransackable_scopes(auth_object = nil)
      %i(from_colaborador)
    end
  end
end
