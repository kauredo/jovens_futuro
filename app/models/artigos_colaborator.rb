class ArtigosColaborator < ApplicationRecord
  belongs_to :artigo
  belongs_to :colaborator
end
