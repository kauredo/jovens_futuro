class ArtigoSerializer
  include JSONAPI::Serializer
  attributes :id, :title, :published, :user
end
