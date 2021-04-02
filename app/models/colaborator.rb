class Colaborator < ApplicationRecord
  mount_uploader :avatar, AvatarUploader
  has_many :artigos_colaborator
  has_many :artigos, through: :artigos_colaborator
  has_many :colaborators, through: :artigos_colaborator

  scope :with_artigos, -> { joins(:artigos).distinct }
end
