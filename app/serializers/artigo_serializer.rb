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

  attribute :blobs do |obj|
    embeds = obj&.contents&.embeds
    blobs = embeds.blobs
    names = blobs&.select { |emb| emb.image? }&.map(&:filename)

    embeds.each_with_index.select do |embed, index|
      obj.contents.to_plain_text.include? names[index].to_s
    end.map(&:first).flatten&.map(&:url)
  end
end
