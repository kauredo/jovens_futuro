class ArtigoSerializer
  include JSONAPI::Serializer
  attributes :id, :categoria, :title, :published, :slug

  attribute :novo do |obj|
    Artigo.novo.include? obj
  end

  attribute :colaborators do |obj|
    UserSerializer.new(obj.colaborators).serializable_hash[:data].map{|b| b[:attributes]}
  end

  attribute :published_at do |obj|
    obj.published_at&.strftime('%d-%m-%Y')
  end

  attribute :content do |obj|
    obj.contents.to_plain_text
  end
end
