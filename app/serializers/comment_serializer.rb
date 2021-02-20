class CommentSerializer
  include JSONAPI::Serializer
  attributes :name, :email, :comment

  attribute :created_at do |obj|
    obj.created_at.strftime('%d-%m-%Y às %H:%M')
  end

  attribute :replies do |obj|
    obj.replies.map do |reply|
      CommentSerializer.new(reply).serializable_hash[:data]
    end
  end
end
