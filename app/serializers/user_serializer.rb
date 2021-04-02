class UserSerializer
  include JSONAPI::Serializer
  attributes :id, :name, :artigos

  attribute :avatar do |user|
    if user.avatar.present?
      url = user.avatar.url 
      uri = URI.parse(url)
      uri.scheme = 'https'
      uri.to_s
    end
  end
end
