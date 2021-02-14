class ArtigoSerializer
  include JSONAPI::Serializer
  attributes :id, :title, :content, :published, :user
end
