class Artigo < ApplicationRecord
  has_rich_text :contents
  belongs_to :user
  scope :published, -> { where(published: true) }
end
