class ArtigoSerializer
  include JSONAPI::Serializer
  attributes :title, :content, :published

  belongs_to :user
end
