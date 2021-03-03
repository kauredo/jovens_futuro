class UserSerializer
  include JSONAPI::Serializer
  attributes :id, :name, :artigos

  attribute :avatar do |user|
    user.avatar.url
  end
end
