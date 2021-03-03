class Colaborator < ApplicationRecord
  mount_uploader :avatar, AvatarUploader
  has_many :artigos
end
