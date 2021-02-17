class UserSerializer
  include JSONAPI::Serializer
  attributes :id, :name, :email, :artigos

  attribute :avatar do |user|
    user.avatar.url
  end
end
