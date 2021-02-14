class UserSerializer
  include JSONAPI::Serializer
  attributes :nome, :EMAIL_PASSWORD

  has_many :artigos
end
