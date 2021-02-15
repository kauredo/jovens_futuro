class ArtigoSerializer
  include JSONAPI::Serializer
  attributes :id, :categoria, :title, :published, :user

  attribute :novo do |obj|
    Artigo.novo.include? obj
  end
end
