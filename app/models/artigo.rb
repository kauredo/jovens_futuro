class Artigo < ApplicationRecord
  scope :published, -> { where(published: true) }
end
