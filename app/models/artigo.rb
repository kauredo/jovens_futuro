class Artigo < ApplicationRecord
  include AlgoliaSearch
  extend FriendlyId
  friendly_id :title, use: :slugged

  algoliasearch per_environment: true do
    attribute :title, :categoria, :page_views, :published

    attribute :url do
      Rails.application.routes.url_helpers.artigos_path(self)
    end

    attribute :colaborators do
      colaborators.map do |c|
        { name: c.name }
      end
    end

    attribute :all_colaborators do
      colaborators.map(&:name).join(', ')
    end

    attribute :content do
      contents.to_plain_text
    end

    attribute :created_at do
      published_at.to_i
    end
  end

  CATEGORIAS = %w(Economia Política Sociedade Saúde Mundo Desporto Cultura Fotografia).freeze

  has_rich_text :contents
  has_many :artigos_colaborator, dependent: :destroy
  has_many :colaborators, through: :artigos_colaborator
  has_many :comments, dependent: :destroy
  scope :last_first, -> { all.order({ published_at: :desc }) }
  scope :published, -> { where(published: true).order({ published_at: :desc }) }
  scope :novo, -> { where('published_at > ?', 3.days.ago) }
  scope :from_colaborador, ->(colaborador) { joins(artigos_colaborator: :colaborator).where(colaborator: { name: colaborador })}

  class << self
    def per_page
      ENV['ARTIGOS_PER_PAGE']
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

  def update_page_views!
    update(page_views: page_views + 1)
  end
end
