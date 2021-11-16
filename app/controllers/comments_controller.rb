class CommentsController < ApplicationController
  def create
    @artigo = Artigo.friendly.find(params[:artigo_slug])

    if params[:reply]
      @comment = Comment.new(reply_params.except('comment'))
      @comment.comment = reply_params['comment'].strip
    else
      @comment = Comment.new(comment_params.except('comment'))
      @comment.comment = comment_params['comment'].strip
    end

    @comment.artigo_id = @artigo.id

    if !comment_params[:name].strip.empty? && @comment.save
      render json: { notice: 'Obrigado pelo teu comentário!', comment: CommentSerializer.new(@comment).serializable_hash[:data] }
    else
      render json: { error: 'Houve um erro com a criação do teu comentário, verifica se inseriste um nome e email válidos e por favor tenta novamente' }
    end
  end

  private

  def comment_params
    params.permit(:name, :email, :comment)
  end

  def reply_params
    params.permit(:name, :email, :comment, :parent_id)
  end
end
