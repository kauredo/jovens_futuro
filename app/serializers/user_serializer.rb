class UserSerializer
  include JSONAPI::Serializer
  attributes :name, :email, :artigos
end
